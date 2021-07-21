var io = require('socket.io')(5000);

io.on('connection', function(socket) {
    socket.on('message', function(data) {
        socket.broadcast.emit('message', data);
    });
    socket.on('disconnect', function() {
        console.log('The socket disconnected. There are ' +
            sockets.length + ' connected sockets');
    });
});