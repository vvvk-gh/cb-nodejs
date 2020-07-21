const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')
//We have to make an http server using express as socket.io only supports on top of http 
const server = http.createServer(app)
const io = socketio(server)

io.on('connection' , (socket)=>{
    console.log(`connected with the socket : ${socket.id}` )

    socket.on('boom' , ()=>{
        console.log(`Boomed from socket: ${socket.id}`)
    })

})



app.use('/' , express.static(__dirname +'/public'))




server.listen(3334 , ()=>{
    console.log(`Listening at http://localhost:3334`);
})