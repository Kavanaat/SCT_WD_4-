To-Do List Web Application

Project Overview

This is a simple To-Do List Web Application built using HTML, CSS, and JavaScript. It allows users to manage their tasks efficiently by adding, editing, marking as complete, and deleting tasks. The app leverages browser localStorage to store tasks persistently on the user's device.

Features

Add Tasks: Users can add tasks with a title and a due date/time.

Mark Tasks as Complete/Incomplete: Tasks can be marked as complete (with a strikethrough) or reverted to incomplete.

Edit Tasks: Users can edit the title and due date of an existing task.

Delete Tasks: Tasks can be removed from the list.

Persistent Storage: Tasks are saved in the browser's localStorage, ensuring they remain available even after the page is refreshed.

Technologies Used

HTML: For creating the structure of the application.

CSS: For styling the application and ensuring a user-friendly interface.

JavaScript: For implementing the app's functionality.

LocalStorage: For storing tasks locally in the browser.

File Structure

ToDoApp/
|-- index.html       # Main HTML file
|-- style.css        # CSS file for styling
|-- script.js        # JavaScript file for functionality

How to Use the App

Open the index.html file in your browser.

Enter a task title and select a date and time for the task.

Click the "Add Task" button to add the task to the list.

Use the following options for each task:

Complete/Undo: Toggle the task's completion status.

Edit: Update the task's title or due date.

Delete: Remove the task from the list.

How It Works

Adding Tasks:

When a user adds a task, the task is stored in an array and saved to localStorage.

The task is displayed on the screen immediately.

Editing Tasks:

When the user clicks the "Edit" button, a prompt appears to update the title and due date.

The changes are saved to localStorage, and the list is updated.

Marking as Complete:

Clicking "Complete" toggles the task's completed property.

The task text is displayed with a strikethrough when marked as complete.

Deleting Tasks:

Clicking "Delete" removes the task from the array and updates localStorage.

Persistence:

On page load, tasks are loaded from localStorage and displayed.

Future Enhancements

Add support for user authentication to save tasks across devices.

Add a search/filter feature to quickly find tasks.

Implement a reminder notification system for due tasks.

Use a modal or form-based interface instead of prompts for editing tasks.

Build a backend using a framework like Node.js for task management.

Conclusion

This project is a simple yet effective demonstration of a fully functional To-Do List application using just frontend technologies. It is suitable for a mini-project and can be extended further with additional features as needed.