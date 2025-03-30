document.addEventListener("DOMContentLoaded", () => {
  // Get the form element
  const form = document.querySelector('form');
  
  // Add submit event listener
  form.addEventListener('submit', (event) => {
    // Prevent default form submission
    event.preventDefault();
    
    // Get the input value
    const input = document.querySelector('input#new-task-description');
    const task = input.value;
    
    // Only proceed if there's actual input
    if (task.trim() === '') return;
    
    // Create new list item
    const listItem = document.createElement('li');
    listItem.textContent = task;
    
    // Add to the todo list
    const todoList = document.querySelector('ul#tasks');
    todoList.appendChild(listItem);
    
    // Clear the input
    input.value = '';
  });
});