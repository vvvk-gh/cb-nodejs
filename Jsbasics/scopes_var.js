//global scope

var x = 10;
function mutliplywith5() {
    return x*5;
}
mutliplywith5();
console.log(x);

//local scope 
console.log(`==================Second Program============`)
var y = 10;

function mutliplywith3() {
    console.log("inside")
    var y = 5;
    console.log(y); 
}
mutliplywith3()
console.log("outside")
console.log(y);


console.log(`=====Can if create a new scope lets checks ======`);
console.log(`==================Second Program============`)

var z = 2;
function doSomething () {
    var z = 3;
     z +=1;
    console.log("inside function : " +z); //4
    if(true){
        var z = 30;
        z += 10;
        console.log("inside if block : "+z); //40
    }
    console.log("outside the if block : "+z); //40 
    //as if cant create new scope , x value in block which if exists gets changed
}
doSomething()
console.log("outside function: " +z); //2
console.log("This happens because var has only function scopr and not block scope"); //2