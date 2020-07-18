const express = require('express')
const app = express()
const path = require('path')
const {Center , Season, Course} = require('./db/models')

app.set('view engine', 'hbs')
app.set("views" , path.resolve(__dirname ,'../views'))

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


module.exports = {
  app          
}