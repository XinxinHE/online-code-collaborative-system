const redisClient = require('../modules/redisClient');
const COLORS = require('../assets/COLORS');
const TIMEOUT_IN_SECONDS = 3600;

module.exports = function(io) {
    const collaborations = {}; 
    const socketIdRoomInfo = {};
    const sessionPath = '/ojserver/'; // for redis

    io.on('connection', (socket) => {
        console.log("**********************");     
        console.log(collaborations);
        // console.log(socketIdRoomInfo);
        socket.emit('getProblemsAndRooms', collaborations);
    });

    io.of('/problemEditor').on('connection', (socket) => {
        console.log("######### " + socket.id + " connected ############");
        const problemId = socket.handshake.query['problemId'];
        const roomId = socket.handshake.query['roomId'];
        const name = socket.handshake.query['name'];
        const color = selectAvailableColor(problemId, roomId);
        const startTime = Date.now();

        socketIdRoomInfo[socket.id] = { 'problemId': problemId,
                                        'roomId': roomId,
                                        'name': name,
                                        'color': color};

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
                            'participants': [],
                            'messageHistory': [],
                            'startDate': startTime
                        }
                    } else {
                        console.log('you are the first one ever worked on this problem')
                        collaborations[problemId][newRoomIndex] = {
                            'roomId': roomId,
                            'cachedInstructions': [],
                            'participants': [],
                            'messageHistory': [],
                            'startDate': startTime
                        }
                    }
                    collaborations[problemId][newRoomIndex]['participants'].push(socket.id);
                    // console.log(collaborations);                    
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
                        'participants': [],
                        'messageHistory': [],
                        'startDate': startTime
                    }
                } else {
                    console.log('you are the first one ever worked on this problem')
                    collaborations[problemId] = [];
                    collaborations[problemId][0] = {
                        'roomId': roomId,
                        'cachedInstructions': [],
                        'participants': [],
                        'messageHistory': [],
                        'startDate': startTime
                    }
                }
                collaborations[problemId][0]['participants'].push(socket.id);
                io.emit('getProblemsAndRooms', collaborations);
            });
        }
        io.emit('getProblemsAndRooms', collaborations);

        socket.on('getParticipants', () => {
            const problemId = socketIdRoomInfo[socket.id]['problemId'];
            const roomId = socketIdRoomInfo[socket.id]['roomId'];
            const participantList = {};
            updateParticipant(problemId, roomId, socket.id);
        });
        

        socket.on('getTime', ()=> {
            const problemId = socketIdRoomInfo[socket.id]['problemId'];
            const roomId = socketIdRoomInfo[socket.id]['roomId'];
            if (problemId in collaborations) {
                let roomIndex = checkRoomExistence(problemId, roomId, collaborations);                
                if (roomIndex !== -1) {
                    console.log('startDate: ', collaborations[problemId][roomId].startDate);
                    socket.emit('getTime', collaborations[problemId][roomId].startDate); 
                }
            }
        });

        socket.on('change', delta => {
            console.log('change' + ' ' + delta + ' ' + Date.now());
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
            cursor['color'] = socketIdRoomInfo[socket.id].color;
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
                    const messageHistory = collaborations[problemId][roomIndex]['messageHistory'];
                    for (let ins of cachedInstructions) {
                        // send ('change', delta) to client
                        socket.emit(ins[0], ins[1]);
                    }

                    for (let message of messageHistory) {
                        socket.emit('sendMessage', JSON.stringify(message));
                    }
                } else {
                    console.log('No buffer to restore!')
                }
            } else {
                console.log('There is a bug with problem with restoreBuffer!');
            }
        });

        socket.on('sendMessage', (message) => {
            const newMessage = {};
            newMessage['message'] = message;
            newMessage['socketId'] = socket.id;
            newMessage['color'] = socketIdRoomInfo[socket.id].color;
            newMessage['name'] = socketIdRoomInfo[socket.id].name;

            const problemId = socketIdRoomInfo[socket.id]['problemId'];
            const roomId = socketIdRoomInfo[socket.id]['roomId'];
            if (problemId in collaborations) {
                let roomIndex = checkRoomExistence(problemId, roomId, collaborations); 
                if (roomIndex !== -1) {
                    collaborations[problemId][roomIndex]['messageHistory'].push(
                        newMessage
                    );
                }
            }
            // emit change to everyone
            forwardEvent(socket.id, 'sendMessage', JSON.stringify(newMessage));
        });

        socket.on('disconnect', () => {
            const problemId = socketIdRoomInfo[socket.id]['problemId'];
            const roomId = socketIdRoomInfo[socket.id]['roomId'];
            // console.log("Disconnect: " + problemId + " " + roomId);
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
            updateParticipant(problemId, roomId, socket.id);
        });
    });
    
    const updateParticipant = function(problemId, roomId, socketId) {
        const participantList = {};
        if (problemId in collaborations) {
            let roomIndex = checkRoomExistence(problemId, roomId, collaborations);                
            if (roomIndex !== -1) {
                for (let one of collaborations[problemId][roomIndex]['participants']) {
                    participantList[one] = Object.assign({}, socketIdRoomInfo[one]);
                }  
            }
        }
        forwardEvent(socketId, 'getParticipants', JSON.stringify(participantList));
    };

    const forwardEvent = function(socketId, eventName, dataString) {
        const data = JSON.parse(dataString);
        
        const problemId = socketIdRoomInfo[socketId]['problemId'];
        const roomId = socketIdRoomInfo[socketId]['roomId'];
        if (problemId in collaborations) {
            let roomIndex = checkRoomExistence(problemId, roomId, collaborations);
            if (roomIndex !== -1) {
                const participants = collaborations[problemId][roomIndex]['participants'];
                if (eventName === 'change') {
                    for (let item of participants) {
                        if (socketId !== item) {
                            io.of('/problemEditor').to(item).emit(eventName, dataString);
                        }
                    }
                } else {
                    for (let item of participants) {
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

    let selectAvailableColor = function(problemId, roomId) {
        if (problemId in collaborations) {
            let roomIndex = checkRoomExistence(problemId, roomId, collaborations);
            let usedColors = [];    
            if (roomIndex !== -1) {
                for (let p of collaborations[problemId][roomIndex].participants) {
                    usedColors.push(socketIdRoomInfo[p].color);
                }
                for (let c of COLORS) {
                    if (usedColors.indexOf(c) === -1) {
                        return c;
                    }
                }
            }
        }
        return COLORS[0];
    }
}