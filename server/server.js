const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123456@ds133311.mlab.com:33311/cs503');
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

const path = require('path');

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);

app.use('/api/v1', restRouter);

app.use(function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

// app.listen(3000, function () {
//   11console.log('Example app listening on port 3000!');
// });

const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();

const editorSocketService = require('./services/editorSocketService.js')(io);

const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('error', onError);
server.on('listening', function() {
  console.log('listening to ' + server.address().port);
});
/* 
const server1 = http.createServer(app);
io.attach(server1);
server1.listen(3001);
server1.on('error', onError);
server1.on('listening', function() {
  console.log('listening to ' + server1.address().port);
});

const server2 = http.createServer(app);
io.attach(server2);
server2.listen(3002);
server2.on('error', onError);
server2.on('listening', function() {
  console.log('listening to ' + server2.address().port);
}); */

function onError(error) {
  console.log(error);
  throw error;
}

//function onListening(server) {
//  const address = server.address();
//  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port;
//  console.log('Listening on ' + bind);
//  console.log(server);
//}