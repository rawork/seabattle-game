var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('pingServer', function(msg){
    console.log('message: ' + msg);
    io.emit('messageChannel', msg + 'Back');
  });
});

http.listen(8090, function(){
  console.log('listening on *:8090');
});