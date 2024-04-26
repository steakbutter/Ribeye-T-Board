$(document).ready(function() {
    $('#openModalBtn').click(function() {
      $('#taskModal').css('display', 'block');
    });
  
    $('.close').click(function() {
      $('#taskModal').css('display', 'none');
    });
  
    $(window).click(function(event) {
      if (event.target == $('#taskModal')[0]) {
        $('#taskModal').css('display', 'none');
      }
    });
  
    $('#taskForm').submit(function(event) {
      event.preventDefault();
      // Add your code here to capture task details and handle form submission
    // You can use localStorage or send the data to a server for processing
    // Clear the form fields after adding the task
    $('#taskForm')[0].reset();
    $('#taskModal').css('display', 'none');
  });
});

// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
console.log ('generateTaskId');
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    console.log ('createTaskCard');
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    console.log ('renderTaskList');
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    console.log ('handleAddTask');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    console.log ('handleDeleteTask');
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    console.log ('handleDrop');
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
