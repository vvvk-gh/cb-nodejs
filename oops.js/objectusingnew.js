//creating an object using new keyword
//traditional function
function person (name,age) {
    this.name = name,
    this.age = age;

}

//traditional function calling
// let p = person('Shankar Dada' , 35)
// console.log(`name is ${name}`)
// console.log(`${name }'s age is ${age}`)

//just add new keyword to make an object and then the function becomes an object
let p = new person('Shankar Dada' , 35)
console.log(p)
console.log(`name is ${p.name}`)
console.log(`${p.name}'s age is ${p.age}`)

