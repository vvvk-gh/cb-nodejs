const fs = require('fs');

fs.readFile(__dirname + "/file.txt" , (err ,data)=>{
    if (err) throw err

    console.log(data.toString())
})