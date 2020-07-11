//Basic example of how async function works
// $(function() {
//     console.log(`This gets printed after the $(Jquery ,ui ,wepage) is loaded Because its asynchronous`)
// })

// console.log(`This gets Printed first`)


$(function(){
let newTodoBox = $('#newtodo')     
let addTodoBtn = $('#addtodo') 
let todoList = $('#todolist') 
addTodoBtn.click(function(){
    //Jquery val() gives you the value of the text input
    let newTodo = newTodoBox.val()
    //post has 3 paramaters location of the router url , data to be sent , gets the response
        $.post(
            '/todos/',
            {task : newTodo},
            //we get the response in the form of data
            function(data) {
                console.log(data); // gives you the response
                //jquery empty() gives you the clears the html elements to the assigned element 
                //in our case it todolist(ul) and it has <li> inside it so it clears all the li elements and makes it clear 
                    todoList.empty();
                    // each value of the data will be read as todo
                    for(todo of data){
                        //console.log(todo.task);
                        todoList.append("<li> "+todo.task+" </li>");
                     }
                    
            }
        )
    })
})