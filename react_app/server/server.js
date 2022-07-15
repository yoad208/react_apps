const express = require('express');
const http = require('http');
const cors = require('cors');
const {Server} = require("socket.io");

const app = express();

const server = http.createServer(app);

app.use(cors())

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log(`user ${socket.id} connected`);

    socket.on('set_user', user => {
        socket.emit('received_user', user)
    })

    socket.on('connect_room', room => {
        socket.join(room)
        socket.emit('received_room', room)
        console.log(`user join ${room} room`)
    })

    socket.on('send_message', data => {
        socket.to(data.room).emit('received_message', data)
        console.log(data)
    })

    socket.on('disconnect', () => {
        console.log(`user ${socket.id} disconnected`);
    });
});

server.listen(3001, () => {
    console.log('listening on 3000');
});