// Task Array
var tasks = [];

// DOM Elements
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

// Add Task
function addTask() {
  var taskTitle = taskInput.value.trim();
  if (taskTitle !== "") {
    var newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    tasks.push(newTask);

    // Add task to DOM
    appendTaskToDOM(newTask);
    taskInput.value = '';
  }
}

// Append Task to DOM
function appendTaskToDOM(task) {
  var taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.setAttribute('data-id', task.id);
  taskItem.innerHTML =
    '<span>' + task.title + '</span>' +
    '<div>' +
    '<button onclick="toggleTask(' + task.id + ')">Complete</button>' +
    '<button onclick="editTask(' + task.id + ')">Edit</button>' +
    '<button onclick="deleteTask(' + task.id + ')">Delete</button>' +
    '</div>';
  taskList.appendChild(taskItem);
}

// Toggle Task Completion
function toggleTask(taskId) {
  var task = tasks.find(function (task) {
    return task.id === taskId;
  });
  if (task) {
    task.completed = !task.completed;
    var taskItem = document.querySelector('[data-id="' + taskId + '"]');
    if (taskItem) {
      taskItem.classList.toggle('completed');
      var toggleButton = taskItem.querySelector('button:first-child');
      toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
    }
  }
}

// Edit Task
function editTask(taskId) {
  var task = tasks.find(function (task) {
    return task.id === taskId;
  });
  if (task) {
    var newTitle = prompt('Edit task title:', task.title);
    if (newTitle) {
      task.title = newTitle.trim();
      var taskItem = document.querySelector('[data-id="' + taskId + '"]');
      if (taskItem) {
        taskItem.querySelector('span').textContent = task.title;
      }
    }
  }
}

// Delete Task
function deleteTask(taskId) {
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });
  var taskItem = document.querySelector('[data-id="' + taskId + '"]');
  if (taskItem) {
    taskList.removeChild(taskItem);
  }
}
