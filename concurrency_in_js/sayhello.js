function say_Hello(times, name) {
    let count =0;
    let loopId = setInterval(()=>{
        count ++;
        
        console.log(`my name :${name}`)
         if(count == times){
             //console.log('reached the given count : ' +count);
             clearInterval(loopId)
         }
    },100)
}

say_Hello(2,'vamsi');
say_Hello(3,"abhi")

//we can clearly observe the concurrency here 
//within 100 ms time interval it called the next function to execute it without having any pararellism
//but here we cant execute it properly like first printing all vamsi's once and then go to the abhi's
//to achieve that serial instead of a parellel so instead of callbacks we can use promises which will be covered in the next file