let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUI = document.querySelector("#items");
let completeUI = document.querySelector(".complete-list ul");

let createTask = function (task) {
  let listItem = document.createElement("li");
  let checkbox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkbox.type = "checkbox";

  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (e) {
  e.preventDefault();

  let listItem = createTask(newTask.value);
  todoUI.appendChild(listItem);
  newTask.value = "";

  bindInCompleteItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  let checkbox = listItem.querySelector('input[type="checkbox"]');
  checkbox.remove();
  completeUI.appendChild(listItem);

  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindCompleteItems = function (deleteItem, deleteTask) {
  let deleteBtn = deleteItem.querySelector(".delete");
  deleteBtn.onclick = deleteTask;
};

let bindInCompleteItems = function (taskItem, completeTask) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = completeTask;
};

for (let i = 0; i < todoUI.children.length; i++) {
  bindInCompleteItems(todoUI.children[i], completeTask);
}

for (let i = 0; i < completeUI.children.length; i++) {
  bindCompleteItems(completeUI.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
