const express = require('express')
server = express();
const todoRoute = require('./routes/todos')
//we can use static files in express using express.static 
//https://expressjs.com/en/api.html for the below methods
server.use('/public' , express.static(__dirname +"/public"))
server.use(express.json());
server.use(express.urlencoded({extented:true}));

//when ever you type ip/todos it will route to the todoRoute which is routes/todos (routes/todo.js)
server.use('/todos' , todoRoute)

server.get("/hello" , (req , res)=>{
    res.send("Hello");
});

server.listen("3462");