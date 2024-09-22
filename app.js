var todoBtn = document.getElementById("add-todo");
var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("todo-list");

function addTodo() {
  var todoText = todoInput.value;
  if (todoText) {
    var li = document.createElement("li");
    li.innerText = todoText;

    var btn = document.createElement("button");
    btn.addEventListener("click", removeTodo);
    btn.classList.add("remove-btn");
    btn.innerText = "Remove";

    li.appendChild(btn);
    todoList.appendChild(li);
  }
  todoInput.value = "";
}

function removeTodo(event) {
  var li = event.target.parentElement;
  todoList.removeChild(li);
}

function addTodoByEnter(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}

todoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keyup", addTodoByEnter);