/* INSTRUCTIONS:

ON PAGE LOAD: the list and input field should be empty.

AFTER TYPING A TODO ITEM into the input field AND pressing the "enter" key OR clicking the "Add" button the typed item should appear below the form inside of the ul#todo-list element.
note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.

AFTER ADDING AN ITEM, that item may be clicked in the todo list to mark it as done. 
The item should be marked done by striking through the words using the text-decoration CSS property. 

Additionally, clicking an item that's been marked as done should remove the item from the list.*/



// on page load the listArea should be empty and the input should be empty

// elements from DOM
var form = document.getElementById("add-todo"); // form
var input = form.querySelector("input"); // input field
var addButton = form.querySelector("button"); // "add" button
var list = document.getElementById("todo-list"); // todo list area

// add button event listener
// note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.
form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form from refreshing when button is clicked
    console.log(input.value); // console log is logging all user input with enter or add button
    // ERROR: text input field is not clearing after each submission

    // should add item when user presses "enter" OR clicks the "add" button
    if (input.value.trim() !== "") { // .trim() will trim whitespace, !== is not equal, "" is empty string
        // WHEN ADDING THE TODO ITEM TO THE LIST, that item MUST be a button el nested within a li el.
        // Nesting the button within a li is that it allows the form to be completely keyboard accessible.
        
        var listItem = document.createElement("li"); // generate li element when adding to do
        var listItemButton = document.createElement("button"); // generate button el within li el
        listItemButton.textContent = input.value; // li > button should contain text of todo


    } else {
        return  // won't add a todo when clicking button without typing a value OR with only spaces
    }

    // append button to li then add to the list
    list.appendChild(listItem);
    listItem.appendChild(listItemButton);

    // set value of input el to empty string after adding todo
    input.value = "";


});








    

    


//function completedItem() {
    // AFTER ADDING AN ITEM, that item may be clicked in the todo list to mark it as done. 
    // The item should be marked done by striking through the words using the text-decoration CSS property. 

    // Additionally, clicking an item that's been marked as done should remove the item from the list.
//}
