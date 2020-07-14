const {db , Student}  = require('./model2')

const task = async () => { 
 try{
       //db sync
        await db.sync()
        //inserting data
        for(i = 0; i < 30 ; i++){
            await Student.create({ 
                name:(['Vamsi','Shammi', 'Harsha', 'SK', 
                'Vishesh','Lokesh','Ajit Sai','Sachin','Virat','Dhoni'])[parseInt(Math.random()*10)],
                age: 10 + parseInt(Math.random()*10), 
        })
        }
        
}
catch(e){console.log(e)}
}

task();