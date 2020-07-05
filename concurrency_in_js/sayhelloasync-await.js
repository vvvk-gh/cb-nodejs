//in async await how we define function is just like how we define in promises
///but varies in how those functions gets called


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

async function task() {
        await say_Hello(5 , 'vamsi')
        await say_Hello(3,'chandresh')
        await say_Hello(3 ,'sandeep') 
} 

task()