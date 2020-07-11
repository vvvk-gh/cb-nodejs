//similar to todolist 

const express = require('express');
const todoRoute = require('./routes/todos')

const server = express();

server.set("view engine", 'hbs'); 


server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use('/todos' , todoRoute);


server.listen("4444");