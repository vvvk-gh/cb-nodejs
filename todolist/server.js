const express = require('express');
const app = express();

app.use(express.urlencoded({extented:true}))

let tasks =[
    'simple random task'
]

app.get('/' , (req, res)=>{

    let taskList = tasks.map((t) => `<li>${t}</li>`)
    res.send(`
    <html>
        <body>
            <form action="/" method ="POST">
            <input name="newtask">
            <button type="submit">Add</button>
            </form>
            <ul>
                ${taskList.join('\n')}
            </ul>
        </body>
    </html>
    `)
})


app.post("/" , (req, res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')

})

app.listen('5555', ()=>{
    console.log("app running at 0.0.0.0:5555/")
})