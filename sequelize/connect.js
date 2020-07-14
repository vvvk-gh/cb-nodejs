const Sequelize = require('sequelize')

const db = new Sequelize('sampledb1' , 'sampleuser1' , 'samplepass1' ,{
    host: 'localhost',
    dialect: 'mysql' 
})

db.authenticate()
    .then(()=> console.log('Connection Worked'))
    .catch((err)=> console.log(err))