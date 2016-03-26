
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {

    var ToDoItem_tosave = document.getElementById("todo-input").value;
    document.getElementById("todo-input").value = "";
    var ul = document.getElementById('to-do-list');
    var li = document.createElement('LI');

    li.appendChild(document.createTextNode(ToDoItem_tosave));
    ul.appendChild(li);

  };

  function markAsDone() {

    var tasktext = document.getElementById("to-do-list").querySelector('li').innerHTML;
  
    var task = document.getElementById("to-do-list").querySelector('li');
    task.parentNode.removeChild(task);

    var ul = document.getElementById('done-list');  
    var li = document.createElement('LI');

    li.appendChild(document.createTextNode(tasktext));
    li.classList.add('done');
    ul.appendChild(li);

  }
  
}
