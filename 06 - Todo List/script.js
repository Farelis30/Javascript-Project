var storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
var ul = document.getElementById("todoList");

storedTodos.forEach(function (todoText) {
  var li = createTodoItem(todoText);
  ul.appendChild(li);
});

function addTodo() {
  var input = document.getElementById("todoInput").value;

  if (input === "") {
    alert("Please enter a task!");
    return;
  }

  var li = createTodoItem(input);
  ul.appendChild(li);

  storedTodos.push(input);
  localStorage.setItem("todos", JSON.stringify(storedTodos));

  document.getElementById("todoInput").value = "";
}

function createTodoItem(todoText) {
  var li = document.createElement("li");
  li.className = "list-item";

  var p = document.createElement("p");
  p.appendChild(document.createTextNode(todoText));

  var actionButtonDiv = document.createElement("div");
  actionButtonDiv.className = "action-button";

  var editButton = document.createElement("button");
  editButton.className = "edit";
  editButton.appendChild(document.createTextNode("Edit"));
  editButton.onclick = function () {
    editTodo(li);
  };

  var deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.onclick = function () {
    deleteTodo(li);
  };

  actionButtonDiv.appendChild(editButton);
  actionButtonDiv.appendChild(deleteButton);

  li.appendChild(p);
  li.appendChild(actionButtonDiv);

  return li;
}

function editTodo(item) {
  var newText = prompt("Edit task:", item.querySelector("p").innerText);

  if (newText === null || newText.trim() === "") {
    return;
  }

  item.querySelector("p").innerText = newText;
  updateLocalStorage();
}

function deleteTodo(item) {
  item.remove();
  updateLocalStorage();
}

function updateLocalStorage() {
  var todos = ul.getElementsByClassName("list-item");
  storedTodos = [];

  for (var i = 0; i < todos.length; i++) {
    var todoText = todos[i].querySelector("p").innerText;
    storedTodos.push(todoText);
  }

  if (storedTodos.length === 0) {
    localStorage.removeItem("todos");
  } else {
    localStorage.setItem("todos", JSON.stringify(storedTodos));
  }
}
