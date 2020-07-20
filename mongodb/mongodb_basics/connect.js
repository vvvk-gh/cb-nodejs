//const MongoClient = require('mongodb').MongoClient;
//Destructuring the above

const {MongoClient} = require('mongodb');

//we dont connect via http we use mongodb protocol
const MongoUrl = 'mongodb://localhost:27017';

//Database Name
const DB_NAME = "tododb";

//async IIFE
(async ()=> {

    const client = await MongoClient.connect(MongoUrl);

    const tododb = client.db(DB_NAME)

    console.log(tododb);
})()