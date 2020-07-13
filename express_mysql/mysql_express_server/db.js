const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    database :'mytestdb',
    user : 'myuser',
    password:'mypass'
});



function getAllPersons() {
    return new Promise ((resolve , reject)=>{
            connection.query('SELECT * FROM persons' , (err ,rows ,cols)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(rows);
                }
            })
    })
}

function addNewPersons(name , age , city) {
    return new Promise((resolve , reject) => {
        connection.query(`INSERT INTO persons (name , age , city) VALUES (? , ? , ?)` , [name , age , city],(err , rows , cols)=>{
                if(err){
                    reject(err)
                }else{
                    resolve();
                }
        })
    })
    
}

exports = module.exports = {
    getAllPersons,
    addNewPersons
}