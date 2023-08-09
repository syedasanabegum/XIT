// Get form and table elements
var todoForm = document.getElementById('todoForm');
var todoTable = document.getElementById('todoItems');
// Keep track of todo items
var todoItems = [];
// Function to add a todo item to the table
function addTodoItem(item) {
    // Create a new row
    var newRow = todoTable.insertRow();
    // Create table cells for each column
    var serialNumberCell = newRow.insertCell();
    var taskTitleCell = newRow.insertCell();
    var dateCell = newRow.insertCell();
    var statusCell = newRow.insertCell();
    var doneCell = newRow.insertCell();
    // Set cell values
    serialNumberCell.textContent = (todoTable.rows.length - 1).toString();
    taskTitleCell.textContent = item.taskTitle;
    dateCell.textContent = item.date;
    statusCell.textContent = item.status;
    doneCell.innerHTML = '<button class="doneButton">Done</button>';
    // Add event listener to the "Done" button
    var doneButton = doneCell.querySelector('.doneButton');
    doneButton.addEventListener('click', function () {
        updateStatusToCompleted(newRow);
    });
}
// Function to update the status to "Completed"
function updateStatusToCompleted(row) {
    var statusCell = row.cells[3];
    statusCell.textContent = 'Completed';
}
// Event listener for form submission
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get the values from the form
    var taskTitleInput = document.getElementById('taskTitle');
    var dateInput = document.getElementById('date');
    var taskTitle = taskTitleInput.value;
    var date = dateInput.value;
    // Create a new todo item
    var todoItem = {
        taskTitle: taskTitle,
        date: date,
        status: 'Not Done',
    };
    // Add the item to the todoItems array
    todoItems.push(todoItem);
    // Add the item to the table
    addTodoItem(todoItem);
    // Reset the form
    todoForm.reset();
});
