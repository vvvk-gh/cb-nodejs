const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true})) //this makes req.body accessible or else it will be undefined in app.post method
app.get('/' , (req, res) => {
    res.send('<h1 style="color:red;">Hello World</h1>')
})

app.get('/greet' , (req, res) => {
    //console.log(req.url);
    //console.log(req.headers);
    //console.log(req.ip);
    //console.log(req.query) // add ?a=10 to the end of the url in the browser
    let person = 'Guest';
    if(req.query.person){   //add ?person = <some_Random_Name> to the end of the url in the browser
     person = req.query.person
    }

    res.send('Good Morning' +" "+person)
})


app.get('/form' , (req, res) => {
    res.sendFile(__dirname + '/files/form.html')
})

//post method
//when we use method post in form action values goes into the body and not like get method (which goes into the query)

app.post('/greet' , (req, res) => {
    let person = 'Guest';
    if(req.body.person){   
     person = req.body.person
    }
        console.log(req.body)
    res.send('Good Evening' +" "+person)
})

//urlpath params

// app.get('/:city/:greet' , (req ,res) =>{
//     res.send(req.params.greet +" to the "+req.params.city)
// })

//note no 2 url params of same pattern should not exist as the first one with the same pattern gets executed so tale care of it 
app.get('/:person/:club' , (req ,res) =>{
    res.send("Thank you " +req.params.person +" for joining our "+req.params.club+" club ");
})

app.listen('4444' , ()=>{
    console.log("listenting on port : localhost:4444")
})
