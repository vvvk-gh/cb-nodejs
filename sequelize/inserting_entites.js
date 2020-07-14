const Sequelize = require('sequelize')
const DataType = Sequelize.DataTypes

//database connection
const db = new Sequelize('sampledb1' , 'sampleuser1' , 'samplepass1',{
    host:'localhost',
    dialect:'mysql'
})


//creating model 

const Student = db.define('student' , {
        name :{
            type : DataType.STRING(30),
            allowNull:false,
        },
        age:{
            type : DataType.INTEGER(2),
            allowNull:false,
            defaultValue: -1,
        }
});


//just db syncing 

// db.sync()
//     .then(()=> console.log(`Database Sychronized`))
//     .catch((e)=> console.log(e))

//sync the database with insertion
//1st method

//  db.sync({alter:true})
//   .then(()=> {Student.create(
//                         {
//                          name : 'lokesh',
//                          age: parseInt(Math.random()*10)
//                         })
//         })
//    .catch((e)=>{console.log(e)})

//2nd method using async await along with inserting data

const task = async() => {
try {
    await db.sync({alter:true})
    //Inserting values
    await Student.create({
        name:'varun',
        age:32
    })
  } catch(e){
      console.error(e);
  }

}

task();
