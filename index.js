// INSTRUCTIONS:

var formToDo = document.getElementById("add-todo"); // ToDo form
var inputToDo = addToDo.document.getElementsByTagName("input"); // ToDo form's text input field
var addButton = addToDo.document.getElementsByTagName("button"); // ToDo form's "add" button
var toDoList = document.getElementById("todo-list"); // ToDo list

// ON PAGE LOAD: the list and input field should be empty.

// AFTER TYPING A TODO ITEM into the input field AND pressing the "enter" key OR clicking the "Add" button the typed item should appear below the form inside of the ul#todo-list element.
// note: Because the markup uses a form to capture new list items, this functionality must be attached to a form submit event using JavaScript.

// WHEN ADDING THE TODO ITEM TO THE LIST, that item MUST be a button element nested within a li element as depicted in the above markup.
// note: The reason for nesting the button within an li is that it allows the form to be completely keyboard accessible.

// AFTER ADDING AN ITEM, that item may be clicked in the todo list to mark it as done. 
// The item should be marked done by striking through the words using the text-decoration CSS property. 

// Additionally, clicking an item that's been marked as done should remove the item from the list.



