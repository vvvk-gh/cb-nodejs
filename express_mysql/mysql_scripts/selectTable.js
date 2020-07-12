const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass',

});

connection.query( 
    'SELECT * FROM persons' ,
    (err, results)=>{
        if(err){
            console.log(err);
        } else{
            console.log('Query executed Sucessfully');
            console.log(results);
        }
        connection.close();
    }
)