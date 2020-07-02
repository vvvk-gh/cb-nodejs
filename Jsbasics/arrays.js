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

//chaning the content in the arrays
let notes = ["sa",'re','ga','ma','pa','da','ni','sa'];

console.log(`notes :${notes}`);
console.log(`notes.slice(x) 
notes.slice(4)
gives you an array starting from x index position`)
console.log(notes.slice(4));

console.log(`notes.slice(x,y) 
notes.slice(4,7)
gives you an array starting from x index position and to before y index position it doesn't involue y positioned value`)
console.log(notes.slice(4,5));

console.log(`Slices dont change the actual array but splice does`)

//splice effects the original value
let splice = notes.splice(4,2); 
console.log(notes);
console.log(splice);

console.log(`Which shows splice spiliting the original array`)

//join 
console.log(notes.join('-'));

//concat 
console.log(notes.concat(splice));