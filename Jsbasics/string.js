//Strings

let str = "This is a string";
console.log(str);

let str2 = 'we are about to see vamsi\'s esacaping character' 
console.log(str2);

let str3 = `I made this using Es6's new backticks `
console.log(str3); 

let template = "this is a template"
let str4 = `Benifits of backticks are:
    Easy new lines
    Templates : ${template}
`
console.log(str4);

//searching in string using predefined functions

console.log(`We can use indexof method to search a key is present in given string

It return -1 if not found and return poistion of string if exists`);
console.log(`let's find out using this example`);

let str5 = "this is an is of an is";
let key = "is";
console.log(str5.indexOf(key));

console.log(`We can use lastindexOf method to search a key is present in given string

It return -1 if not found and return poistion of string if exists`);
console.log(`let's find out using this example`);


let str6 = "this is an is of an is";
let key2 = "is";
console.log(str6.lastIndexOf(key2));

