const http = require('http')
const express = require('express')
const app = express()
const socketio = require('socket.io')
//We have to make an http server using express as socket.io only supports on top of http 
const server = http.createServer(app)
const io = socketio(server)

io.on('connection' , (socket)=>{
    console.log(`connected with the socket : ${socket.id}` )
    
    //from the client to the server : check script.js first
    socket.on('boom' , ()=>{
        console.log(`Boomed from socket: ${socket.id}`)
    })

    //from the server to the client 
setInterval(()=> {
    socket.emit('whizz')
},2000)


})




app.use('/' , express.static(__dirname +'/public'))




server.listen(3334 , ()=>{
    console.log(`Listening at http://localhost:3334`);
})