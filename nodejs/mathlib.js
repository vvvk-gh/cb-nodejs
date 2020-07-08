function add(x,y){
  console.log(`The sum of digits ${x, y } is ${x+y}`)

}

function mul(x,y){
    console.log(`The multipication of digits ${x, y} is ${x*y}`)
   }



//this exports all your functions and these can be imported by other files and use functions in this file/lib

module.exports ={
    add,
    mul
}