const redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;

module.exports = function(io) {
    const collaborations = {}; 
    const socketIdRoomInfo = {};
    const sessionPath = '/ojserver/'; // for redis

    io.on('connection', (socket) => {
        console.log("**********************");
        console.log(collaborations);
        socket.emit('getProblemsAndRooms', collaborations);
    });

    io.of('/problemEditor').on('connection', (socket) => {
        console.log("######### " + socket.id + " connected ############");        
        const problemId = socket.handshake.query['problemId'];
        const roomId = socket.handshake.query['roomId'];
        const name = socket.handshake.query['name'];
        
        console.log(roomId);
        socketIdRoomInfo[socket.id] = { 'problemId': problemId, 'roomId': roomId, 'name': name};
        
        if (problemId in collaborations) {
            let roomIndex = checkRoomExistence(problemId, roomId, collaborations);
            if (roomIndex !== -1) {
                // there are users working on the code
                collaborations[problemId][roomIndex]['participants'].push(socket.id);
            } else {
                // check redis to see if there is any cache
                redisClient.get(sessionPath + problemId + "-" + roomId, function(data) {
                    // add a new room if the roomId is not in the collaboration
                    const newRoomIndex = collaborations[problemId].length;                    
                    if (data) {
                        console.log('session terminated previously, pulling back...');
                        collaborations[problemId][newRoomIndex] = {
                            'roomId': roomId,
                            'cachedInstructions': JSON.parse(data),
                            'participants': []
                        }
                    } else {
                        console.log('you are the first one ever worked on this problem')
                        collaborations[problemId][newRoomIndex] = {
                            'roomId': roomId,
                            'cachedInstructions': [],
                            'participants': []
                        }
                    }
                    collaborations[problemId][newRoomIndex]['participants'].push(socket.id);
                    console.log(collaborations);                    
                    io.emit('getProblemsAndRooms', collaborations);                    
                });
            }            
        } else {
            // there is no user working on the code, check redis first
            redisClient.get(sessionPath + problemId + "-" + roomId, function(data) {
                if (data) {
                    // there were users working on this code before
                    // pull the history data
                    console.log('session terminated previously, pulling back...');
                    collaborations[problemId] = [];
                    collaborations[problemId][0] = {
                        'roomId': roomId,
                        'cachedInstructions': JSON.parse(data),
                        'participants': []
                    }
                } else {
                    console.log('you are the first one ever worked on this problem')
                    collaborations[problemId] = [];
                    collaborations[problemId][0] = {
                        'roomId': roomId,
                        'cachedInstructions': [],
                        'participants': []
                    }
                }
                
                collaborations[problemId][0]['participants'].push(socket.id);
                console.log(collaborations);                
                io.emit('getProblemsAndRooms', collaborations);
            });
        }
        console.log(collaborations);
        io.emit('getProblemsAndRooms', collaborations);

        socket.on('change', delta => {
            // console.log('change' + ' ' + delta + ' ' + Date.now());
            // put change into collaborations cachedInstruction
            const problemId = socketIdRoomInfo[socket.id]['problemId'];
            const roomId = socketIdRoomInfo[socket.id]['roomId'];
            if (problemId in collaborations) {
                let roomIndex = checkRoomExistence(problemId, roomId, collaborations);                
                if (roomIndex !== -1) {
                    collaborations[problemId][roomIndex]['cachedInstructions'].push(
                        ['change', delta, Date.now()]
                    );
                }
            }
            // emit change to everyone else
            forwardEvent(socket.id, 'change', delta);
        });

        socket.on('cursorMove', (cursor) => {
            //console.log('Cursor change '+ socketIdRoomInfo[socket.id].problemId + ' ' +
                        //socketIdRoomInfo[socket.id].roomId + ' ' + cursor);
            cursor = JSON.parse(cursor);
            // add socketId to the cursor object
            cursor['socketId'] = socket.id;
            // forward the cursor move event to everyone else working on the same session
            forwardEvent(socket.id, 'cursorMove', JSON.stringify(cursor));
        });

        socket.on('restoreBuffer', () => {
            const problemId = socketIdRoomInfo[socket.id]['problemId'];
            const roomId = socketIdRoomInfo[socket.id]['roomId'];
            if (problemId in collaborations) {
                let roomIndex = checkRoomExistence(problemId, roomId, collaborations);                
                if (roomIndex !== -1) {
                    const cachedInstructions = collaborations[problemId][roomIndex]['cachedInstructions'];
                    for (let ins of cachedInstructions) {
                        // send ('change', delta) to client
                        socket.emit(ins[0], ins[1]);
                    }
                } else {
                    console.log('No buffer to restore!')
                }
            } else {
                console.log('There is a bug with problem with restoreBuffer!');
            }
        });

        socket.on('disconnect', () => {
            const problemId = socketIdRoomInfo[socket.id]['problemId'];
            const roomId = socketIdRoomInfo[socket.id]['roomId'];
            console.log("Disconnect: " + problemId + " " + roomId);
            let foundAndRemove = false;
            if (problemId in collaborations) {
                let roomIndex = checkRoomExistence(problemId, roomId, collaborations);

                if (roomIndex !== -1) {
                    const participants = collaborations[problemId][roomIndex]['participants'];
                    const index = participants.indexOf(socket.id);
    
                    if (index >= 0) {
                        // remove this left user
                        participants.splice(index, 1); 
                        foundAndRemove = true;
    
                        if (participants.length === 0) {
                            const key = sessionPath + problemId + "-" + roomId;
                            const value = JSON.stringify(collaborations[problemId][roomIndex]['cachedInstructions']);
    
                            redisClient.set(key, value, redisClient.redisPrint);
                            redisClient.expire(key, TIMEOUT_IN_SECONDS);
                            
                            collaborations[problemId].splice(roomIndex, 1);
                        }

                        if (collaborations[problemId].length === 0) {
                            delete collaborations[problemId];
                        }
                    } else {
                        console.log('Error: user doesn\'t exist!');
                    }
                    if (!foundAndRemove) {
                        console.log('Error: user not found!');
                    }
                } else {
                    console.log('There is a bug with roomId when disconnect!');
                }
            } else {
                console.log('There is a bug with problemId when disconnect!');
            }
            io.emit('getProblemsAndRooms', collaborations);
        });
    });

    const forwardEvent = function(socketId, eventName, dataString) {
        const data = JSON.parse(dataString);
        
        const problemId = socketIdRoomInfo[socketId]['problemId'];
        const roomId = socketIdRoomInfo[socketId]['roomId'];
        if (problemId in collaborations) {
            let roomIndex = checkRoomExistence(problemId, roomId, collaborations);

            if (roomIndex !== -1) {
                
                const participants = collaborations[problemId][roomIndex]['participants'];
                for (let item of participants) {
                    if (socketId != item) {
                        console.log("Forward Event: " + eventName);
                        console.log(dataString);
                        io.of('/problemEditor').to(item).emit(eventName, dataString);
                    }
                }
            } else {
                console.log('There is a bug with room.');
            }
        } else {
            console.log('There is a bug with problem.');
        }
    }

    let checkRoomExistence = function(problemId, roomId, collaborations) {
        if (collaborations[problemId]) {
            for (let room of collaborations[problemId]) {
                if (room['roomId'] === roomId) {
                    return collaborations[problemId].indexOf(room);
                }
            }
        }
        return -1;
    }
}