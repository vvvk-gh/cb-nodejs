//importing the sequlize
const Sequelize = require('sequelize')

//creating a connection 
//it has 3 parameters db , user , password , object { host and dialect details }
const db = new Sequelize('sampledb1' , 'sampleuser1' , 'samplepass1' ,{
    host: 'localhost',
    dialect: 'mysql' 
})

//verifying the connection using authenticate method
db.authenticate()
    .then(()=> console.log('Connection Worked'))
    .catch((err)=> console.log(err))