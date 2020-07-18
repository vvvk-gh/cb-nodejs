const {db} = require('./db/models');
const {app} = require('./server');


const start = async () =>{
    try {

        await db.sync()
       
        app.listen('3131' , ()=>{
            console.log(`Listening at http://localhost:3131`)
        })

    } catch (error) {
        console.log(error);
    }
       
}

start();
