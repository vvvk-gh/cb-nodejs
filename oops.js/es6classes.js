class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    constructor(name , age , school){
        super(name,age) //this calls the parents construtors and gets the logic from their
        this.school =school;
    }
}

let p = new Person('Vamsi', 23);
let s = new Student('Sharan' , 12 , 'Sri Chaitanya Techno');
console.log(JSON.stringify(p))
console.log(JSON.stringify(s))