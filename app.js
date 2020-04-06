var express = require('express');
var path = require('path');
var socketio = require('socket.io');
var http = require('http');
var router = require('./router');

var app = express();

var server = http.createServer(app);
var io = socketio(server);
app.use(router);

io.on('connection', (socket)=>{
    var name;
    socket.on('joinRoom', (name, roomId)=>{
        name = name;
        socket.join(roomId);
        //for user who is connecting
        socket.emit('message', `Welcome ${name} in the chat Room`, name);

        //for all the users except who is connecting
        socket.broadcast.to(roomId).emit('message', `${name} has joined the room.`, name);

        socket.on('chatMessage', message=>{
            io.to(roomId).emit('message', message, name);
        })
    });
    // socket.on('disconnect', ()=>{
    //     socket.emit('message', `${name} has left the room`);
    // })
})

var PORT = process.env.PORT || 1234;
server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})