function addTask() {
    let i=0;
    let tasks = [];
    let taskInput = document.getElementById('task');

    tasks[i] = taskInput.value;
    i++;

    // Clear the input field
    taskInput.value = '';
    for(let j = 0; j < tasks.length; j++) {
        document.getElementById('task-list').innerHTML += `<li>${tasks[j]}</li>`;
    }
    //document.getElementById('task-list').innerHTML = tasks[i];
}