# online-code-collaborative-system
1. Implemented a web-based collaborative code editor which supports multiple users editing simultaneously (ACE, Socket.io, Redis)   
2. Designed and developed a single-page web application for coding problems (Angular2, Node.js, MongoDB)   
3. Built a user-code executor service which can build and execute user’s code (Flask, Docker)   
4. Refactored and improved system throughput by decoupling services using RESTful API and loading balancing by Nginx (REST API, Nginx)

```javascript

// editorSocketService.js 
// collaborations json data schema
collaborations: {
    problemId: [
        roomIndex: {
            'roomId': roomId,
            'participants': [socketId, socketId],
            'cachedInstructions': [eventname, delta, date]
        }
    ]
}

// collaborations json examples

collaborations: {
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
cursor: {
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
// 

```