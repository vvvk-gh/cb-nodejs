
// basically a closure means when a function is declare in a function the outer functions local scope variables can be accessed 
// in inner function and that function is called as an closure

// method -1 : not a closure 

function count (){
    var intial = 1;
    function plus (){
        console.log(++intial);
    }
     plus()
}

count();
count();

//method -2 : not a closure

function count (){
    var intial = 1;
    function plus (){
        console.log(++intial);
    }
     return plus()
}

count();
count();

//closure

function counter(intial){
    //var val = intial; //it works even we commented this line
    function plus(){
        //console.log(++val) 
      console.log(++intial);
    }
    return plus;
  }
  
  var c= counter(10); //return just plus
  c(); //this return plus() since in the first run gives 11
  c(); // 12 as its still holds its previous 11 value in the plus() function
  
//another example

function counter2(intialVal , deltaVal){
    return {
        up(){
            intialVal += deltaVal;
            console.log(intialVal)
        },
        down(){
            intialVal -= deltaVal;
            console.log(intialVal);
        }
    }
}

const c = counter2(10 ,2);
c.up();
c.up();
c.down();
