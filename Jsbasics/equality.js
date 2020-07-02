console.log(1 == "1"); //checks the value
console.log(1 === "1") //checks the type and value

console.log("11" + 1) 

console.log("11" - 1) //11 gets converted into number so answer is 10

console.log([] == ""); //true

console.log(0 == ""); //true
    
console.log([] == 0); //true as empty string and empty arrays gives you value 0


//try in repl/webconsole : returns 0 as +[] returns numberic as we saw in uninary operator section 
console.log({} + []); 
// any {} on rhs is a block and its not valid now we have to evaluate only +[] which is + "" and string typecasted as 0 
console.log(+[]); // returns 0 as the empty array is typecasted as number 0 as we used unary operator
console.log(1+[]); // 1+ 0 which is 1
console.log([] + {}); // this gives you object
// " " + [object Object] is [object Object] as we know if we try covert an object into the string it will be [object Object]  

//unary operator 
console.log("1"); //this 1 as a string
console.log(+"1"); // this return 1 as number


console.log(typeof("1")); //string
console.log(typeof(+"1")); //number

//THIS IS BLOCK AS WE CAN SEE BRACES OM LEFT
// class clsaName{
//     some random data on the RHS is called as blocks
// }


//THIS IS object AS WE CAN SEE BRACES ON RIGHT
// x = { same random data on the LHS is called as }


