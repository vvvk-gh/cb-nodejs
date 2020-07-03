(function f(){
    console.log("step 1")
    function f(){ 
        console.log("step 2")
        return console.log(1); 
    } 
    console.log("about to return f()")
    return f(); 
    function f(){
        console.log("here to return 3") 
        return console.log(3); 
    } })();


    function saymyname(){
        console.log(`hi this is vamsi`)
        function saymyname(){
            console.log(`this is abhi`)
        }
        return saymyname();
        function saymyname() {
            console.log(`this is riduculas to unserstand`)
        }
    }

saymyname();

var a = [1,3];

console.log(typeof(Object.prototype))
 
let arr = [ 1,2,3,4,5]; 
console.log(arr.slice(0,3));
arr.slice(3);