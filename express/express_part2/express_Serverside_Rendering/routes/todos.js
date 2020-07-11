
const route = require('express').Router();

//let todos = ["this is Default array task Item"] //sending data as array

let todos = [{task : "this is Default taskItem"}] //sending data as array

route.get('/' ,(req ,res) =>{
    //render(x,y): 
    //x refers to which file it has to render in our case todos(todos.hbs) 
    //y : the data that should be sent will sent as an an objects with some keys and values
    //the that key is used in that x file the value assigned to this will be rendered
    //if a title keyword is used in mustache format like {{title}} the title assigned to it will be displayed on webpage 
    res.render('todos' , { title : 'Todo List',
        todos})
})

route.post('/' , (req ,res) =>{
        todos.push({
            task: req.body.newtodoitem
        })
        res.redirect('todos')
})

//making it available to export
module.exports = route;