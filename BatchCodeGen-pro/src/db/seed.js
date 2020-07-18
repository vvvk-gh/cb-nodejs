//intialzing / inserting data into the databases

const {db , Center , Season , Teacher ,  Course , Batch } = require('./models');

//seeding the data
const seed = async () =>{ 
    try{
            db.sync({alter:true})

            await Center.bulkCreate([
                {id:"PP" , name : 'Pitmapura', city:'New Delhi'},
                {id:"DW" , name : 'Dwarka',  city: 'New Delhi'},
                {id:"NO" , name : 'Noida', city: 'New Delhi'},
                {id:"DD" , name : 'Dehradun' , city: 'Dehradun'},
                {id:"ON" , name : 'Online' , city: 'New Delhi'},
            ],{
                ignoreDuplicates: true
            })

            await Season.bulkCreate([
                {id:"S" , name : 'Summer'},
                {id:"F" , name : 'Fall'},
                {id:"W" , name : 'Winter'},
                {id:"P" , name : 'Spring'}
             ],{
                    ignoreDuplicates: true
                })

            await Course.bulkCreate([
                {id:"LP" , name:"Launch Pad"},
                {id:"CX" , name:"Crux"},
                {id:"IB" , name:"Interview Bootcamp"},
                {id:"AD" , name:"Android Development"},
                {id:"WD" , name:"Web Development (Node Js)"},
            ],{
                ignoreDuplicates :true
            })
    }
    catch(e) {
        console.log(`e`);
    }
}

seed();