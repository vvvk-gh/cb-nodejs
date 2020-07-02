//Pass by value 
var olympicRunningRaceWinner = "Usan Bolt";

function changeWinner(winner) {
    winner = "K L PAUL"; 
    //since we copied the olypicRunningRaceWinner into winner variable 
}

console.log(olympicRunningRaceWinner);
changeWinner(olympicRunningRaceWinner);
console.log(olympicRunningRaceWinner);

//Pass by reference

var actorsInJersey = ["Nani" , "Shardha" ,"Anirudh"];

function hindiRemakeActors(hindiActors){
    hindiActors[0] = 'Shahid Kapkoor'
    hindiActors[1] = 'Kiara'
    hindiActors[2] = 'Karan-Johar'
}

console.log(actorsInJersey);
hindiRemakeActors(actorsInJersey);
console.log(actorsInJersey)