var todoBtn = document.getElementById("add-todo");
var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("todo-list");

function addTodo() {
  var todoText = todoInput.value;
  if (todoText.trim()) {
    var li = document.createElement("li");
    li.innerText = todoText;
    li.addEventListener("click", toggleDash)

    var btn = document.createElement("button");
    btn.classList.add("remove-btn");
    btn.innerText = "Remove";
    btn.addEventListener("click", removeTodo);

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

function toggleDash(event){
  var li = event.target;
  li.classList.toggle("checked");
}

todoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keyup", addTodoByEnter);