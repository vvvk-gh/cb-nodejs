const express = require('express')
server = express();

//we can use static files in express using express.static 
server.use('/public' , express.static(__dirname +"/public"))

server.get("/hello" , (req , res)=>{
    res.send("Hello");
});

server.listen("3462");