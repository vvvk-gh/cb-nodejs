const mysql = require ('mysql2');


const insert = {
    //process agr[0] is node and process.argv[1] is file 
    name : process.argv[2],
    age: process.argv[3],
    city : process.argv[4]    
}

const connection = mysql.createConnection({
    host: 'localhost',
    database : 'mytestdb',
    user: 'myuser',
    password:'mypass'
});


//it will be read data from here but its not dynamic
// connection.query( 
//     `INSERT INTO persons (name , age , city) VALUES (
//         'Vamsi',
//           23,
//         'Hyderabad'
//         )` ,
//     (err , results)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(`Inserted a row`);
//         }
//     }
// )

//this method we are going to use process.argv to take the input from the console 
connection.query( 
    `INSERT INTO persons (name , age , city) VALUES (
        '${insert.name}',
        '${insert.age}',
        '${insert.city}'
        )` ,
    (err , results)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(results);
            console.log(`Inserted a row successfully`);
        }
        connection.close();
    }
)