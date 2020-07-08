function awesome(){
console.log(`This is Awesome`)
}

//since this is being imported to another file so first this needs to be exported 
// and we can do this using module.exports which generates an object

module.exports = {
    awesome
}