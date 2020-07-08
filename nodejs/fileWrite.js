//fs is an inbulit filesharing library
//to check all the node libraries you can check nodes api 
const fs = require ('fs')
//this method has 3 parameters filename , data that you want to writeinto the file and followed by callback which is an error first callback
//__dirname is an special function which allows to create files in the specified directory

fs.writeFile(__dirname +'/file.txt' ,"some random data" , (err)=>{
    if(err) throw err;
    console.log(`Written into the file`);

})