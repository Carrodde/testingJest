import { changeTodo } from "./functions";
import { Todo } from "./models/todo";

export function createHtml(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));

  let todosContainer: HTMLUListElement = document.getElementById(
    "todos"
  ) as HTMLUListElement;

  todosContainer.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let li: HTMLLIElement = document.createElement("li");

    if (todos[i].done) {
      li.classList.add("todo__text--done");
    }

    li.classList.add("todo__text");
    li.innerHTML = todos[i].text;
    li.addEventListener("click", () => {
      toggleTodo(todos[i], todos);
    });

    todosContainer.appendChild(li);
  }
}

function toggleTodo(todo: Todo, todos: Todo[]) {
  changeTodo(todo);
  createHtml(todos);
}
