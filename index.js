/* INSTRUCTIONS:

ON PAGE LOAD: the list and input field should be empty.

AFTER TYPING A TODO ITEM into the input field AND pressing the "enter" key OR clicking the "Add" button the typed item should appear below the form inside of the ul#todo-list element.
note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.

AFTER ADDING AN ITEM, that item may be clicked in the todo list to mark it as done. 
The item should be marked done by striking through the words using the text-decoration CSS property. 

Additionally, clicking an item that's been marked as done should remove the item from the list.*/



// on page load the listArea should be empty and the inputField should be empty

// elements from DOM
var form = document.getElementById("add-todo"); // form
var inputField = form.querySelector("input"); // input field
var addButton = form.querySelector("button"); // "add" button
var listArea = document.getElementById("todo-list"); // todo list area

// add button event listener
form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form from refreshing when button is clicked
    console.log(inputField.value); // console log is logging all user input with enter or add button
    // ERROR: text input field is not clearing after each submission

    // should not add a todo when clicking button without typing a value OR with only spaces
    // should add item when user presses "enter" OR clicks the "add" button
    if (inputField.value.trim() !== "") { // .trim() will trim whitespace, !== is not equal, "" is empty string
        var listItem = document.createElement("li");
    } else {
        return
    }

    // add the typed item inside the ul#todo-list element
    // note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.


    // WHEN ADDING THE TODO ITEM TO THE LIST, that item MUST be a button element nested within a li element as depicted in the above markup.
    // note: The reason for nesting the button within an li is that it allows the form to be completely keyboard accessible.

    // ERROR: adding the following code made the first two tests concerning input types fail
    var listItems = document.createElement('li');
    listItems.innerText = inputField.value;
    listArea.appendChild(listItems);


});








    

    


//function completedItem() {
    // AFTER ADDING AN ITEM, that item may be clicked in the todo list to mark it as done. 
    // The item should be marked done by striking through the words using the text-decoration CSS property. 

    // Additionally, clicking an item that's been marked as done should remove the item from the list.
//}
