//promoises can help us getting serial outputs even though the code runs cocurrently 

function say_Hello(times , name){
    return new Promise((resolve , reject)=>{
        let count =0;
        let loopId = setInterval(()=>{
            count++;
            console.log(`${name} got printed`);
            if(count == times){
                clearInterval(loopId);
                resolve()
            }
        },100)    
    })
    
}

// say_Hello(2,'Vamsi')
//     .then(()=>{
//         say_Hello(2,"Abhi")
//     })
//the below returns the parallel outputs concurreny 
// say_Hello(3,'vamsi')
//  .then(say_Hello(3,'abhi'))
//  .then(say_Hello(3,'sai'))

//to avoid parallel outputs if you wnat serial outputs : sequential
say_Hello(3,"abhi")
    .then(() => say_Hello(3,"Sai"))
    .then(()=> say_Hello(3,"vamsi"))
