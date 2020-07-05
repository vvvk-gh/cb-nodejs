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


async function task(params) {
    await Promise.all([
        say_Hello(3,"Vamsi"),
        say_Hello(4,"Abhi"),
        say_Hello(3,"Sai"),
    ])
    console.log(`------------first batch done------------`)
    await Promise.all([
        say_Hello(3,"Vamsi"),
        say_Hello(4,"Abhi"),
        say_Hello(3,"Sai"),
    ])
}

task()