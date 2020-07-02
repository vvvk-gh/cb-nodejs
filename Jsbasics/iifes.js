
//traditional function 

// function sayHello () {
//     console.log("Hello !")
// }

// sayHello()


// IIFE : Immediatly Invoked Functions Expressions

(function sayHello () {
    console.log("Hello !")
})();


//anonymous fuctions - no name to the functions
// the entire thing is an expression so immediatly its invoked as it got created
(function () {
    console.log("Hello !")
}) ();


//Uses of IIFES :
//1)
//it's helps us to create local scope with out polluting the global scope
//but es6 already have let and const for block scopes but if you are using es5 iifes are useful
(function () {
  var a = 10; //local scope
  var b = 20; //local scope
  console.log(a+b);  
}) ();
console.log(a); //global scope


//2)
//inside if blocks as var doesn't support block scope
var d = 10;
if(true){
    var d = 7;
}
console.log(d); //7 as its var doesn't have block scope and here we can use let or iifes

var d = 10;
if(true){
    (function ( ) {
        var d = 7;  // local iife value it doesn't effect global value
        console.log(d)
    })();
}
console.log(d);


//3) Minification
//reduces the ugly and long code in the functions

//traditional function 

function display(){
    console.log("4^3 = " +Math.pow(4,3))
    console.log("3^4 = " +Math.pow(3,4))
    console.log("root 3 = " +Math.sqrt(2))
    console.log("sin 10 = " +Math.sin(30))
}

display();
// iifes minimazation

(function(c , p , sq , s) {
    c("4^3 = " +p(4,3))
    c("3^4 = " +p(3,4))
    c("root 3 = " +sq(2))
    c("sin 10 = " +s(30))
})(console.log , Math.pow , Math.sqrt ,Math.sin);


