
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function removeTask(button) {
    const listItem = button.parentNode;
    listItem.remove();
}

function toggleCompleted(checkbox) {
    const listItem = checkbox.parentNode;
    listItem.classList.toggle('completed');
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.onclick = () => removeTask(removeButton);
        removeButton.className = "removeButton";
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = () => toggleCompleted(checkbox);
        li.appendChild(removeButton);
        li.appendChild(checkbox);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
