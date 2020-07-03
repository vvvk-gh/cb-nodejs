//SetTimeout : Executed after the mentioned timeout

function say_Hello() {
 console.log(`Hey there, Hi`);
}

console.log(`And the waiting starts...`);
setTimeout(say_Hello, 3000);
setTimeout(say_Hello, 1000);


//SetInterval : Executes continously at that time interval
function say_Hello() {
    console.log(`Hi, This executes every 2s`);
   }
   
   console.log(`And the waiting starts...`);
   setInterval(say_Hello, 2000);
   
//To stop interval we can use clearInterval

function say_MyName() {
    console.log(`My name is John Cena`);
   }
   console.log(`U can't see me`);
   let result =  setInterval(say_MyName, 1000);
   clearInterval(result);


//limit it to a N times
let intervalId;
let counter = 0;

function blinkEyes3times(){
    counter++;
    if(counter >= 3){
    clearInterval(intervalId);
    }
    console.log(`Blink eyes`);
    
}
console.log(`Program starts`)
intervalId = setInterval(blinkEyes3times , 1000);


//anonymous function

setInterval( function(){
    console.log(`this runs every 1s`);
} , 1000)
