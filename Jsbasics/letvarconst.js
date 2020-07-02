var a = 10;
var a = 11; //replaces the old a value with the new value
a++;
console.log(a); //12 

let b = 20;
//let b = 30; //lets wont let you define twice within the same block
b++;
console.log(b);

const c = 30;
//c++; // this wont work as we declared c as const
console.log(c)

// const can be modified in objects as they use call by reference and not by value but still you can't redefine it  


//objects
const bestCoderOfTheYear = {
    2017 : "Abhinav",
    2018 : "Sai",
    2019 : "Vamsi",
    2020 : "Ramya"
} 

console.log(bestCoderOfTheYear)

//modifying by adding and removing a new property to a const

bestCoderOfTheYear[2016] = "vijay";
console.log(bestCoderOfTheYear)

delete bestCoderOfTheYear[2016]
console.log(bestCoderOfTheYear[2016]) //undefined as we deleted it
console.log(bestCoderOfTheYear)

//returns errors we if try to re declared it even of same or different datatype

const bestCoderOfTheYear = {"A" : "b"};


//arrays

const arr = [1,2,3,4,5]
console.log(arr);
//modifying the const declared array by adding and removing elements in the array
arr.push(6);
console.log(arr);
arr.pop() //removes the last element
console.log(arr);

//pass by reference works but directly assiging gives an error
// to be simple once const assigned that identifier cant be on LHS side    
// const x = " ";
// x = // this throws an error as discussed