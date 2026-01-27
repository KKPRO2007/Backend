const {
  addTodo,
  listTodos,
  markDone,
  deleteTodo
} = require("./main");

addTodo("Learn Node.js fs module");
addTodo("Build backend using file system");

console.log("ALL TODOS");
listTodos();

const todoId = 1769492183182;

markDone(todoId);
deleteTodo(todoId);

console.log("UPDATED TODOS");
listTodos();
