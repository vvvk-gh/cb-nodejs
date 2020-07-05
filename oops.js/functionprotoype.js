function person(name , age){
    this.name =name
    this.age = age
   // this.isAdult = function(){return this.age >= 18} //1st case
}
person.prototype.isAdult = function(){return this.age >= 18} //2nd case

let p1 = new person('Vamsi' , 12)
let p2 = new person('SrinivasaRao' ,35)

console.log(`${p1.isAdult()}`)
console.log(`${p2.isAdult()}`)
//-----------------1st case----------------
//this below one returns false even we use same function logic because p1 and p2 are 2 seperate objects
//and the contents of these objects occupies different spaces in the memory thus return false
//console.log(p1.isAdult == p2.isAdult)

//-----------------2nd case----------------
//as the function is declared outside the object and its created in the proptotype of window
console.log(p1.isAdult == p2.isAdult) //so these will be true