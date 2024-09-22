var todoBtn = document.getElementById("add-todo");
var todoInput = document.getElementById("todo-input");
var todoList = document.getElementById("todo-list");

todoBtn.addEventListener("click", function () {
  var todoText = todoInput.value;
  if (todoText) {
    var li = document.createElement("li");
    li.innerText = todoText;
    var btn = document.createElement("button");
    btn.innerText = "Remove";
    li.appendChild(btn);
    todoList.appendChild(li);
  }
  todoInput.value = "";
});
