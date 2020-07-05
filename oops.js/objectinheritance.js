let grandpaProperty = {'house': '60Lakhs','Land' : '30Lakhs' ,'complex' : '10Lakhs'}

//now all the grandpa's property is inherited to father
//to inherit we user object.create()  
let fatherProperty = Object.create(grandpaProperty);

//father can own some property with his own business money right?
fatherProperty.newLand = '20Lakhs'
//let see each of their properties
console.log('GrandFathersProperty :' +JSON.stringify(grandpaProperty))
//it only shows what father has owned with his money
//since its an object created by grandfather he can also have those property but it wont be shown
console.log('FathersProperty :' +JSON.stringify(fatherProperty))
//but when we try to access that data we can see it
//we can see we can access grandpa's property as father is inherited from grandfather
console.log(`Checking Does my Father has my GrandFathers house and its price is: ${fatherProperty.house}`)

//lets say father has sold the grandpa's house which means its -60Lakhs
grandpaProperty.house = "-60Lakhs"
//now lets see fathers property
console.log('GrandFathersProperty :' +JSON.stringify(grandpaProperty.house))
//lets also check does this effects fathers property ?
console.log('FathersProperty :' +JSON.stringify(fatherProperty.house))

//so chaning the value of a property in parent object also effects the child objected which is inherited
