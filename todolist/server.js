 const express = require('express');
const app = express();

app.use(express.urlencoded({extented:true}))

app.set('view engine', 'hbs');
let tasks = ["simpledata"]

app.get('/' , (req, res)=>{
    res.render('home', {
        title : "Todo List",
        tasks
    })
})

app.post("/" , (req, res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')

})

app.listen('5555', ()=>{
    console.log("app running at 0.0.0.0:5555/")
})