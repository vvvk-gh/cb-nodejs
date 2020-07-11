const express = require('express')

server = express();

server.get("/hello" , (req , res)=>{
    res.send("Hello");
});

server.listen("3462");