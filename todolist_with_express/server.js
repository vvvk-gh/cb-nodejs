const express = require('express');
const app = express();

app.use(express.urlencoded({extented:true}))

app.get('/' , (req, res)=>{
    res.send(`
    <html>
        <body>
            <form action="/" method ="POST">
            <input name="newtask">
            <button type="submit">Add</button>
            </form>
            <ul>
                <li>Some Random Data</li>
            </ul>
        </body>
    </html>
    `)
})


app.post("/" , (req, res)=>{
res.send("New task = " + req.body.newtask);
})

app.listen('5555', ()=>{
    console.log("app running at 0.0.0.0:5555/")
})