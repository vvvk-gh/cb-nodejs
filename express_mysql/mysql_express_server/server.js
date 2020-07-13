const express = require('express');
const app = express()
const db = require('./db')

app.set("view engine" , "hbs")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/' , (req, res)=>{

    db.getAllPersons()
        .then((persons)=>{
                res.render('persons', {
                        persons ,
                        title :'Add Persons Page'
                        })
        })
        .catch((err)=>{
                res.send(err);
        })
})

app.get('/add' , (req , res)=>{
    res.render('add_persons', {
            title : 'Add Persons'
    });
})


app.post('/add' , (req , res)=>{
    db.addNewPersons(req.body.name , req.body.age , req.body.city)
        .then(()=>{
            res.redirect("/")
        })
        .catch(()=>{

        })
});

app.listen('5554', ()=>{
    console.log(`App listening at http://localhost:5554/`);
})