//We need to reload the page every time we add an list so
//to avoid those things we can user route which updates the response without reloading or redirecting the page

//https://expressjs.com/en/api.html#express.router to know more about express methods

const route = require('express').Router();

let todos = [];

route.get('/' , (req, res)=>{    
    res.send(todos)
})

route.post('/' , (req, res)=>{
    todos.push({
            task : req.body.task
        }) 
        res.send(todos)   
})


module.exports = route;