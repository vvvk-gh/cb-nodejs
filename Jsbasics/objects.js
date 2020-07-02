let obj = {
    a : "hell0",
    b : 2,
    c: ["this" , "is", 1, "array" , true]
}

console.log('a b c are the properties of the obj')
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

//adding property to an object 

obj.l = 1133;
console.log(obj)

//deleting an object 

delete obj.c;
console.log(obj);