// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

/**
 * Removes a task from the list.
 * @param {HTMLButtonElement} button - The remove button clicked.
 */
function removeTask(button) {
    const listItem = button.parentNode;
    listItem.remove();
}

/**
 * Toggles the completed state of a task.
 * @param {HTMLInputElement} checkbox - The checkbox clicked.
 */
function toggleCompleted(checkbox) {
    const listItem = checkbox.parentNode;
    listItem.classList.toggle('completed');
}

/**
 * Adds a new task to the list.
 */
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.onclick = () => removeTask(removeButton);
        removeButton.className = "removeButton";

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = () => toggleCompleted(checkbox);

        // Append elements to the list item
        li.appendChild(removeButton);
        li.appendChild(checkbox);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }
}
