const fs = require('fs');

const data = fs.readFileSync(__dirname + '/readfromhere.txt' )

const lines = data.toString().split("\n")
console.log(lines);

let unique = [...new Set(lines)];
console.log(unique);

let resArray = unique.map((item) => [item +" "+lines.filter(val => val == item).length])
resArray = [...resArray].toString().split(",").join("\n")
console.log(resArray);

    fs.writeFile(__dirname + "/writehere.txt" , resArray , (err) =>{
            if (err) throw err
            console.log("copied into the file")
        })