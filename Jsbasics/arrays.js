//arrays
let arr1 = [1,2,3];
console.log(arr1);

//accessing arrays 
console.log(arr1[0]);

//array lenght function 
console.log(arr1.length);

//hetrogenous arrays
var arr2 = ["a" ,2,"b",false, [56.7,76.7]]
console.log(arr2);

//for loops

//for-in-loop
for(let index in arr2){
    console.log(index);
}

//for of loop
for(let val of arr2){
    console.log(val);
}

//push and pop

var fruits = ["melon" , "orange"];
console.log(fruits);
fruits.push("mango"); // adds as an last element
console.log(fruits);
fruits.pop(); //removes last element
console.log(fruits);

//shift and unshift
fruits.unshift("guvua"); //adds element to the first
console.log(fruits)

fruits.shift("guvua"); //removes element from the first
console.log(fruits);
