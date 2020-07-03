//es6 promises

function downloadInceptionMovie(status){
   console.log(`Please Wait...`)
    setTimeout(function(){
        let NotificationTobePassed = "Inception Movie Downloaded Sucessfully";
        status(NotificationTobePassed);
    } ,1000)
}

downloadInceptionMovie( 
 function (notificationFromAboveFunction) {
    console.log("Downloding the movie you requested ...");
         console.log(notificationFromAboveFunction);
    
})


// promises
//if it resolves it goes to the .then 
//if it rejects it goes to the catch 

function downloadInceptionMovie(correct) {
    console.log(`Please wait...`)
    return new Promise(function (resolve,reject){
            
            setTimeout(function() {
                let NotificationTobePassed = 'Downloaded Insterstellar Movie Successfully'
                if(correct){
                resolve(NotificationTobePassed);
                } else {
                    reject("Error : Cant Download, try again later")
                }
            } ,1000)

    })
   
}

downloadInceptionMovie(true).then(function (notificationpassedfromabove) {
    console.log("Downloading the movie you requested....");
    console.log(notificationpassedfromabove)
}).catch(function(err) {
    console.log(err);
})


//another promise example to pick up the phone

function pickUpThePhone(vamsisaid){
    console.log("Phone is Ringing..")
    return new Promise(function (resolve,reject) {
        if(vamsisaid == "yes"){
            let whoIsPicking = "Vamsi is picking the Phone"
            resolve(whoIsPicking);
        } else {
            reject("Vamsi is busy someone has to pickup the phone")
        }
    })
}

pickUpThePhone("A BIG NOOOO").then(function(agreedToPick) {
    console.log(agreedToPick);
}).catch(function(notagreedtopick) {
    console.log(notagreedtopick);
    
})

(function(x){
    delete x;
    console.log(x);
})(1);


var a = []; 
a.unshift(1); 
a.unshift(22); 
console.log(a);
a.shift(); 
a.unshift(3,[4,5]);
console.log(a); 
a.shift(); 
a.shift(); 
console.log(a);
console.log(a.shift());


var x = 1;
if(function f(){}){
    console.log(typeof f)
    x += typeof f;
}
console.log(x);


(function(foo){
    console.log(foo);
    console.log(foo["bar"]);    
})({foo: {
    "bar" : 1}})

 




