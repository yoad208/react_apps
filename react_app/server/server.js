const express = require('express');
const http = require('http');
const cors = require('cors');
const {Server} = require("socket.io");

const port = process.env.PORT | 3001

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

    socket.on('connect_room', room => {
        socket.join(room)
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

server.listen(port, () => {
    console.log('listening on 3001');
});