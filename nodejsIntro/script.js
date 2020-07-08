//we have to use the function in lib.js in file.js and we can do it using doing import or require
const lib = require('./lib.js');

console.log(lib) //if you run this file it should show you the function in that other file

//now as we imported the lib we can use the function in that

lib.awesome();

//lets mathlib where we will write functions like add , diff and use in here

const mathlib = require('./mathlib');

console.log(mathlib);

mathlib.add(2,3);
mathlib.mul(3,3);