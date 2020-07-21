const {MongoClient} = require('mongodb')
const MongoUrl = 'mongodb://localhost:27017'
const DB_Name = 'tododb';

// async function WriteTask(){

//     const client = await MongoClient.connect(MongoUrl)
//     const tododb = client.db(DB_Name)
    
//     const todos = tododb.collection('todos') // collection = table 

//     const todo = {
//         task : 'This is Important',
//         priority: 2,
//         owner:'manager'
//     }

//     const result = await todos.insertOne(todo); //returns a promise
//     console.log(result)
    
// }



async function writeTasks(){
    const client = await MongoClient.connect(MongoUrl);
    const tododb = client.db(DB_Name)
    
    const todos = tododb.collection('todos')


    const result = await todos.insertMany([

        {task : 'simple task ' , priority:4 , owner: 'Intern' },
        {task : 'external task ' , priority:2 , owner: 'Executive' },
        {task : 'Complicated task ' , priority:3 , owner: 'Lead' },
        {task : 'Critical task ' , priority:1 , owner: 'Manager' },

        //it will accept anhy kind of object  there is no such thing like all should have all the 3 parameters
        //it will also accept the below even though they are not uniform
        {task : 'some other task ' },
        {task : 'task should be done by today '},
        {owner: 'Lead' },
        {priority:1 , owner: 'Manager' }
    ])
    console.log(result);
 
}

//WriteTask();
writeTasks();