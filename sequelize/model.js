//Creating models using sequelize

//importing sequlize
const Sequelize = require('sequelize');
const Datatypes = Sequelize.DataTypes

//creating db connection
const db = new Sequelize('sampledb1' , 'sampleuser1' , 'samplepass1' ,{
    host : 'localhost',
    dialect :'mysql'
})

//creating a model
// const Student = db.define('student' , {
//     name : Datatypes.STRING(40),
//     age: Datatypes.INTEGER(2),
// })

const Student = db.define('student' , {
    name : {
        type : Datatypes.STRING(40),
        allowNull : false,

    },
    age: {
        type :Datatypes.INTEGER(2),
        allowNull : false,
        defaultValue : -1
    },
})

//alter:true allows you to update the scheme or else it cant apply the changes
//force:true will delete the existing table and create a new one

db.sync({alter:true})
    .then(()=> console.log('Database Synchronised'))
    .catch((err)=> console.log(`${err}`))

