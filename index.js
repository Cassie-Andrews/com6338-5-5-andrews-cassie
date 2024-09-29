/* INSTRUCTIONS:

ON PAGE LOAD: the list and input field should be empty.

AFTER TYPING A TODO ITEM into the input field AND pressing the "enter" key OR clicking the "Add" button the typed item should appear below the form inside of the ul#todo-list element.
note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.

AFTER ADDING AN ITEM, that item may be clicked in the todo list to mark it as done. 
The item should be marked done by striking through the words using the text-decoration CSS property. 

Additionally, clicking an item that's been marked as done should remove the item from the list.*/





var form = document.getElementById("add-todo"); // form
var input = form.querySelector("input"); // input field
var addButton = form.querySelector("button"); // "add" button
var list = document.getElementById("todo-list"); // todo list area

// EVENT LISTENER for "add" button
// note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.
form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form from refreshing when button is clicked

    // should add item when user presses "enter" OR clicks the "add" button
    if (input.value.trim() !== "") { // .trim() will trim whitespace, !== is not equal, "" is empty string
        // WHEN ADDING THE TODO ITEM TO THE LIST, that item MUST be a button el nested within a li el.
        // Nesting the button within a li is that it allows the form to be completely keyboard accessible.
        
        var listItem = document.createElement("li"); // generate li element when adding to do
        var listItemButton = document.createElement("button"); // generate button el within li el
        listItemButton.textContent = input.value; // li > button should contain text of todo

        // EVENT LISTENER for list item buttons
        // items in the todo list display may be clicked 1x to mark as done, 2x to remove 
        listItemButton.addEventListener("click", function() {
            if (listItemButton.style.textDecoration === "line-through") { // 2nd click removes item
                list.removeChild(listItem);
            } else { // 1st click strike through using text-decoration CSS property
                listItemButton.style.textDecoration = "line-through"; 
            }
        });
    } else { // if input field is empty or only has spaces
        return  // nothing will happen when clicking the add button
    }
    
    // append button to li then add to the list
    listItem.appendChild(listItemButton);
    list.appendChild(listItem);

    // set value of input to empty string after adding each todo
    input.value = "";
});