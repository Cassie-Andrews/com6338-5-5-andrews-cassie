/* INSTRUCTIONS:

ON PAGE LOAD: the list and input field should be empty.

AFTER TYPING A TODO ITEM into the input field AND pressing the "enter" key OR clicking the "Add" button the typed item should appear below the form inside of the ul#todo-list element.
note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.

AFTER ADDING AN ITEM, that item may be clicked in the todo list to mark it as done. 
The item should be marked done by striking through the words using the text-decoration CSS property. 

Additionally, clicking an item that's been marked as done should remove the item from the list.

var button = document.querySelector("button"); // ToDo form's "add" button
var list = document.querySelector("ul"); // ToDo list
var listItem = list.querySelector('li'); // ToDo list item
*/


// prevent form from refreshing when button is clicked
form.onsubmit = function(e) {
    e.preventDefault(); 
 
 }


// elements from DOM
var form = document.getElementById("add-todo"); // form
var inputField = form.querySelector("input"); // input field
var addButton = form.querySelector("button"); // "add" button
var listArea = document.getElementById("todo-list"); // todo list area

// add button event listener
addButton.addEventListener("click", function() {
    var listItems = document.createElement('li');
    listItems.innerText = inputField.value;
    listArea.appendChild(listItems);
});

console.log(inputField.value);

//function addItem(e) {
 //   var target = e.target; // get target of event
//}



    // on page load
    // list should be empty
    // input field should be empty


    // after user types a todo item in the input field AND presses "enter" OR clicks the "add" button
    // add the typed item inside the ul#todo-list element
    // note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.

    // WHEN ADDING THE TODO ITEM TO THE LIST, that item MUST be a button element nested within a li element as depicted in the above markup.
    // note: The reason for nesting the button within an li is that it allows the form to be completely keyboard accessible.


//function completedItem() {
    // AFTER ADDING AN ITEM, that item may be clicked in the todo list to mark it as done. 
    // The item should be marked done by striking through the words using the text-decoration CSS property. 

    // Additionally, clicking an item that's been marked as done should remove the item from the list.
//}
