let express = require('express');
let socket = require('socket.io');

// App Setup
let app = express();

let server = app.listen(4000, function(){
    console.log('listening to request on port 4000');
});

// Static File
app.use(express.static('public'));

// Socket setup
let io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)

    // Handle chat event
    socket.on('chat', function(data){
        io.sockets.emit("chat", data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    })
});
