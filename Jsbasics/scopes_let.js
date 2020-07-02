console.log("let allows us to have block scope")

let z = 2;
function doSomething () {
    let z = 3;
     z +=1;
    console.log("inside function : " +z); //4
    if(true){
        let z = 30;
        z += 10;
        console.log("inside if block : "+z); //40
    }
    console.log("outside the if block : "+z); //40 
    //as if cant create new scope , x value in block which if exists gets changed
}
doSomething()
console.log("outside function: " +z); //2
