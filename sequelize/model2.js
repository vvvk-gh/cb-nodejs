const Sequelize = require('sequelize')

const DataType = Sequelize.DataTypes;

// database connection

const db = new Sequelize ('sampledb1', 'sampleuser1' , 'samplepass1' , {
    host : 'localhost',
    dialect : 'mysql',
})


//model : defining the schema

const Student = db.define('student', {
    name :{
        type : DataType.STRING(40),
        allowNull:false,
    },
    age:{
        type: DataType.INTEGER(2),
        allowNull:false,
        defaultValue: -1
    }
})




exports = module.exports = {
    db , Student
}