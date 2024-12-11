// Select elements
const taskInput = document.getElementById('task');
const taskTimeInput = document.getElementById('task-time');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Initialize tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to display tasks
function displayTasks() {
  taskList.innerHTML = ''; // Clear current tasks
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
      <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">
        ${task.title} - ${new Date(task.date).toLocaleString()}
      </span>
      <button onclick="markComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(taskItem);
  });
}

// Function to add a task
addTaskButton.addEventListener('click', () => {
  const title = taskInput.value;
  const date = taskTimeInput.value;

  if (title && date) {
    tasks.push({ title, date, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to localStorage
    displayTasks();
    taskInput.value = '';
    taskTimeInput.value = '';
  } else {
    alert('Please fill out both fields.');
  }
});

// Function to mark a task as complete/incomplete
function markComplete(index) {
  tasks[index].completed = !tasks[index].completed; // Toggle the completed status
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
  displayTasks(); // Refresh the UI
}

// Function to edit a task
function editTask(index) {
  const task = tasks[index];
  
  // Prompt the user to edit task details
  const newTitle = prompt('Edit task title:', task.title);
  const newDate = prompt('Edit task date (YYYY-MM-DDTHH:MM):', task.date);

  // Validate input
  if (newTitle && newDate) {
    tasks[index].title = newTitle;
    tasks[index].date = newDate;

    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
    displayTasks(); // Refresh the UI
  } else {
    alert('Both title and date must be provided.');
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove the task from the array
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
  displayTasks(); // Refresh the UI
}

// Display tasks on page load
displayTasks();
