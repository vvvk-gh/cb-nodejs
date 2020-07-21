const {MongoClient} = require('mongodb')
const MongoUrl = 'mongodb://localhost:27017'
const DB_Name = 'tododb'

async function readTasks(){
    const client = await MongoClient.connect(MongoUrl)
    const tododb = client.db(DB_Name)
    const todos = tododb.collection('todos') //creating a collection which is similar to tables 

    //const todoArr = await todos.find({}).toArray() //.find({}) will find all the documents in the collection and toArray will convert the result to the array  
    //const todoArr = await todos.find({priority : 1}).toArray()  will returns only docs which are having prority : 1 
    //const todoArr = await todos.find({priority : {$gt : 2}}).toArray() // returns docs for which priority is >2
    //const todoArr = await todos.find({priority :{$exists: false}}).toArray()
//     const todoArr = await todos.find({  //and operator 
//         $and:[
//                 {priority: {$lt : 3}},
//                 {priority: {$gt : 1}}
//         ]
// }).toArray()
    // sort by proirity async
    //const todoArr = await todos.find({}).sort({priority: 1}).toArray()
    
    // sort by proirity desc and only if priority exists
    // const todoArr = await todos.find({priority:{$exists : true}}).sort({priority: -1}).toArray()

    //todoArr.forEach((todo) => console.log(JSON.stringify(todo)))
    
    //count the documents for proirity doesn't exists
    const todoArr = await todos.find({priority :{$exists: false}}).count()
    console.log(todoArr)
  
}

readTasks()