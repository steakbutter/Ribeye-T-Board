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
    // You can use localStorage
    // Clear the form fields after adding the task
    $('#taskForm')[0].reset();
    $('#taskModal').css('display', 'none');
  });
});

// Retrieve tasks and nextId from localStorage
let submitButton = document.getElementById('taskButton');
submitButton.addEventListener('click', function(event){
    event.preventDefault()
    const taskName = document.getElementById('taskName');
    const date = document.getElementById('dueDate');
    const descriptionTask = document.getElementById('description');
    const taskData = {
        taskName: taskName.value,
        date: date.value,
        description: descriptionTask.value
    };
let allTasks = JSON.parse(localStorage.getItem('newTask'));
if (!allTasks) {
    allTasks = []
}
allTasks.push(taskData)
  console.log('Task Name:', taskName.value);
  console.log('Due Date:', date.value);
  console.log('Description:', descriptionTask.value);
  localStorage.setItem('newTask', JSON.stringify(allTasks));

})
let taskList = JSON.parse(localStorage.getItem("taskForm")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
let taskId = Date.now(); 
return taskId;

}
let newTaskId = generateTaskId();
taskList.push({ id: newTaskId, taskName: 'New Task'});
localStorage.setItem('tasks', JSON.stringify(taskList));
console.log('New task ID generated:', newTaskId);

// Todo: create a function to create a task card
function createTaskCard(taskId) {
    const taskInfo = $('<div>')
    .addClass('card project-card draggable my-3')
    .attr('data-project-id', taskId);
  const cardHeader = $('<div>').addClass('card-header h4').text(taskData.taskName);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(taskData.description);
  const cardDueDate = $('<p>').addClass('card-text').text(taskData.date);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', taskCard.id);
  cardDeleteBtn.on('click', handleDeleteTask);
    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
