# online-code-collaborative-system
1. Implemented a web-based collaborative code editor which supports multiple users editing simultaneously (ACE, Socket.io, Redis)   
2. Designed and developed a single-page web application for coding problems (Angular2, Node.js, MongoDB)   
3. Built a user-code executor service which can build and execute user’s code (Flask, Docker)   
4. Refactored and improved system throughput by decoupling services using RESTful API and loading balancing by Nginx (REST API, Nginx)

socket.broadcast.emit() behaves similar to io.sockets.emit , but instead of emitting to all connected sockets it will emit to all connected socket except the one it is being called on. So in this case the socket referenced by socket will not receive the event.

```javascript

// editorSocketService.js 
// collaborations json data schema
collaborations = {
    problemId: [
        roomIndex: {
            'roomId': roomId,
            'participants': [socketId, socketId],
            'cachedInstructions': [eventname, delta, date],
            'messageHistory': [{message, socketId, color, name}]
        }
    ]
}

// collaborations json examples

collaborations = {
  '1': [{
            'roomId': 0,
            'participants': ['/problemEditor#8KM_3IUgvibmPkYTAAAB', '/problemEditor#APzuekqueL6CF06HAAAC'],
            'cachedInstructions': ['change', '"start":{"row":3,"column":26},"end":{"row":3,"column":27},                            "action":"insert","lines":["d"]', 1506527479352]
            ]
        },{
            'roomId': 2,
            'participants': ['/problemEditor#8KM_3IUgvibmPkYTAADD', '/problemEditor#APzuekquerwerweOIOMO'],
            'cachedInstructions': ['change', '"start":{"row":3,"column":28},"end":{"row":3,"column":29},                            "action":"insert","lines":["g"]', 1506527479352]
        },
   ]
}

// cursor change
cursor = {
    "row":1,
    "column":13,
    "socketId":"/problemEditor#8KM_3IUgvibmPkYTAAAB"
}

// socketIdToProblemAndRoomId Schema
socketIdRoomInfo = {
    socketId: {
        'problemId': problemId,
        'roomId': roomId,
        'color': color,
        'name': name
    }
}

// Example
socketIdToRoomInfo = {
    '/problemEditor#8KM_3IUgvibmPkYTAAAB': {
        'problemId': '0',
        'roomId': 1
    },
    '/problemEditor#8KM_3IUgvibmPkYTAAAC': {
        'problemId': '1',
        'roomId': '2'
    }
}

// client side: collaboration.service.ts
// clientsInfo

clientsInfo = {
    socketId: {
        'marker': marker,
        'color': color
    }
}

colorTrack = {
    problemId: {
        roomId: {
            color1: true,
            color2: false,
            color3: false,
            color4: true,
            color5: true,
        }
    }
}


participantList = { '/problemEditor#Y1yKObvO9rPH1qtmAAAE': 
                    { problemId: '1', roomId: '1', name: 'xxmk', color: '#800080' }
                  }
newMessage = {message, name, color, socketId}
messageHistory = [{name, color, message}]
```