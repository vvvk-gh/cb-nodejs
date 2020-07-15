//model.js -> defines the structure of the database
const {db} = require('./connect')

//const sequelize = require('sequelize')
//const DataType = sequelize.DataTypes
//The above can be also defined as below
const {DataTypes} = require('sequelize')

//verifying the credentials
db.authenticate()
    .then(()=> console.log(`Credentails Worked 
        In the Database`))
    .catch((e) => console.log(`Error : ` + e))



// define a teacher
const Teacher = db.define('teacher' , {
    name:{
        type: DataTypes.STRING(30),
        allowNull: false,
    }
})

//define a cousre
const Course = db.define('course' ,{
    id:{
        type : DataTypes.STRING(2),
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(40),
    }

})


//defina a center

const Center = db.define('center' ,{
    id:{
        type : DataTypes.STRING(2),
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(15),
        allowNull:false,
    },
    city : {
        type:DataTypes.STRING(19),
        allowNull:false
    }
})


//define a batch

const Batch = db.define('batch' ,{
    code:{
        type : DataTypes.STRING(8),
        primaryKey: true,
    },
    year: DataTypes.INTEGER(4),
    start : DataTypes.DATE,
    end:DataTypes.DATE
})

//define a season 

const Season = db.define('season' ,{
    id:{
        type : DataTypes.STRING(2),
        primaryKey:true,
    },
    name:{
        type: DataTypes.STRING(10),
        allowNull: false,
    }

})

//assoociations

Batch.belongsTo(Course)
Batch.belongsTo(Center)
Batch.belongsTo(Season)

Course.hasMany(Batch)
Season.hasMany(Batch)
Center.hasMany(Batch)

//syncing
db.sync({alter:true})
    .then(()=> console.log('Database Synchronized'))
    .catch((E)=> console.log(E))