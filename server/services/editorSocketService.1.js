const redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;

module.exports = function(io) {
    // const collaborations = {} ; // sessionId > participants + cachedInstructions
    // const socketIdToSessionId = {};
    // const sessionPath = '/ojserver/'; // for redis

    const collaborations = {}; // problemId > roomId > participants + 
    const participantIdToRoomId = {};
    const roomPath = '/ojserver';
    
    io.on('connection', (socket) => {
        console.log(socket);
        // const sessionId = socket.handshake.query['sessionId'];
        // const roomId = 
        socketIdToSessionId[socket.id] = sessionId;

        // if (!(sessionId in collaborations)) {
        //     collaborations[sessionId] = {
        //         'participants': []
        //     };
        // }

        if (sessionId in collaborations) {
            // there are users working on the code
            collaborations[sessionId]['participants'].push(socket.id);
        } else {
            // there is no user working on the code, check redis first
            redisClient.get(sessionPath + sessionId, function(data) {
                if (data) {
                    // there were users working on this code before
                    // pull the history data
                    console.log('session terminated previously, pulling back...');
                    collaborations[sessionId] = {
                        'cachedInstructions': JSON.parse(data),
                        'participants': []
                    }
                } else {
                    console.log('you are the first one ever worked on this problem')
                    collaborations[sessionId] = {
                        'cachedInstructions': [],
                        'participants': []
                    }

                }
                
                collaborations[sessionId]['participants'].push(socket.id);
            });
        }

        socket.on('change', delta => {
            console.log('change' + socketIdToSessionId[socket.id] + ' ' + delta);
            // put change into collaboration cachedInstruction
            const sessionId = socketIdToSessionId[socket.id];
            if (sessionId in collaborations) {
                collaborations[sessionId]['cachedInstructions'].push(
                    ['change', delta, Date.now()]
                );
            }
            // emit change to everyone else
            forwardEvent(socket.id, 'change', delta);
        });

        socket.on('cursorMove', (cursor) => {
            console.log('change ' + socketIdToSessionId[socket.id] + ' ' + cursor);
            cursor = JSON.parse(cursor);
            // add socketId to the cursor object

            cursor['socketId'] = socket.id;

            // forward the cursor move event to everyone else working on the same session
            forwardEvent(socket.id, 'cursorMove', JSON.stringify(cursor));
        });

        socket.on('restoreBuffer', () => {
            const sessionId = socketIdToSessionId[socket.id];
            if (sessionId in collaborations) {
                const cachedInstructions = collaborations[sessionId]['cachedInstructions'];
                for (let ins of cachedInstructions) {
                    // send ('change', delta) to client
                    socket.emit(ins[0], ins[1]);
                }
            } else {
                console.log('There is a bug!');
            }
        });

        socket.on('disconnect', () => {
            const sessionId = socketIdToSessionId[socket.id];

            let foundAndRemove = false;
            if (sessionId in collaborations) {
                const participants = collaborations[sessionId]['participants'];
                const index = participants.indexOf(socket.id);

                if (index >= 0) {
                    // remove this left user
                    participants.splice(index, 1); 
                    foundAndRemove = true;

                    if (participants.length === 0) {
                        const key = sessionPath + sessionId;
                        const value = JSON.stringify(collaborations[sessionId]['cachedInstructions']);

                        redisClient.set(key, value, redisClient.redisPrint);
                        redisClient.expire(key, TIMEOUT_IN_SECONDS);
                        delete collaborations[sessionId];
                    }
                } else {
                    console.log('Error: user doesn\'t exist!');
                }

                if (!foundAndRemove) {
                    console.log('Error: user not found!');
                }
            }
        });
    });

    const forwardEvent = function(socketId, eventName, dataString) {
        const sessionId = socketIdToSessionId[socketId];
        if (sessionId in collaborations) {
            const participants = collaborations[sessionId]['participants'];
            for (let item of participants) {
                if (socketId != item) {
                    io.to(item).emit(eventName, dataString);
                }
            }
        } else {
            console.log('There is a bug');
        }
    }
}