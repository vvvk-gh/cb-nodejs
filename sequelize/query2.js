const {db , Student} = require('./model2')

const task = async () =>{
    await db.sync()
    //1st to find all
    //const students = await Student.findAll()
    //2nd conditional query
    const students = await Student.findAll({
        // where : {age : 13},
        where : {
            age: {
                $or:{
                    $lt: 12,
                    $gt: 18
                }
            }
        },
        order:[
            ['age' ,'DESC']
        ]
        
    })
    students.forEach(student => {
        //console.log(student.dataValues);
        console.log(`
         Name : ${JSON.stringify(student.dataValues.name)}  Age : ${JSON.stringify(student.dataValues.age)}
        `)    
    });
    
    
}

task();