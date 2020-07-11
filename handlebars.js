// //these are the templating languages which helps us writing repetive code for bigger programs
// //they are lot of templating languages :pug template ,ejs template , jade template
// //recommened : Handlebars ://https://handlebarsjs.com/ ,

// //example : 
// //lets a there an obj as following
// {
//     "name" : "Handlebars",
//     "syntax": "Mustache",
//     "sitesused" : "codingblocks"
// }

// //this can be accessed in html like below

// <p>{{ name }} {{syntax}} {{sitesused}}</p> //this give the values of the object properties/keys


// //these even works for nested objects

// {
//     "name" : "Handlebars",
//     "syntax": "Mustache",
//     "sitesused" : "codingblocks",
//     "websitespeed":{
//         "edge" : "2sec",
//         "mozilla": "1.5sec",
//         "chrome" : "1.2sec"
//     }
// }

// // website speed in a edge can be accessed as

// <p>{{ websitespeed.edge }}</p>