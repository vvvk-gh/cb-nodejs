const express = require('express')
const app = express()
const path = require('path')
const {Center, Season, Course, Batch} = require('./db/models')

app.set('view engine', 'hbs')
app.set("views" , path.resolve(__dirname ,'../views'))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/batchcode' , async (req , res)=>{
  try {

    const courses = await Course.findAll()
    const seasons = await Season.findAll()
    const centers = await Center.findAll()
    const years = [2015 , 2016 , 2017 , 2018 , 2019 , 2020]
    res.render("batchcode" , {
      courses , seasons , centers ,years
    })
    
  } catch (error) {
    console.log(error)
  }
    
})


app.post('/batchcode' , async (req ,res)=>{
    let batchcode = ''; //WDPP18S1
    batchcode += req.body.course
    batchcode += req.body.center
    batchcode += req.body.year.substr(2)
    batchcode += req.body.season
    batchcode += req.body.batchno
    
  try {
        const batch = await Batch.create({
            code :batchcode,
            year : req.body.year,
            courseId: req.body.course,
            centerId: req.body.center,
            seasonId: req.body.season,
            start: Date.parse(req.body.start),
            end : Date.parse(req.body.end) 
          })
        res.send(batch.code);
  } catch (error) {
    console.log(error)
  }
})


app.get('/batches' , async(req ,res)=>{

    const batches = await Batch.findAll({
      include : [Course , Season , Center]
    })

  res.render("batches" , {batches})
})


exports = module.exports = {
  app          
}