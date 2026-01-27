const fs = require("fs");
const path = require("path");

const TODO_FILE = path.join(__dirname, "todo.json");

function readTodos() {
  const data = fs.readFileSync(TODO_FILE, "utf-8");
  return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}

function addTodo(task) {
const todos =readTodos();

const newTodo = {
id:Date.now(),
    task,
done:false
  };

  todos.push(newTodo);
writeTodos(todos);

console.log("✅ Todo added:", task);
}


function listTodos() {
const todos =readTodos();

if (todos.length ===0) {
console.log("📭 No todos found!");
return;
  }

  todos.forEach((todo, index) => {
const status = todo.done ?"✅" :"❌";
console.log(`${index + 1}.${status}${todo.task}`);
  });
}


function markDone(id) {
const todos =readTodos();

const todo = todos.find(t => t.id === id);

if (!todo) {
console.log("❌ Todo not found");
return;
  }

  todo.done =true;
writeTodos(todos);

console.log("🎉 Todo marked as done!");
}

function deleteTodo(id) {
const todos =readTodos();
const filteredTodos = todos.filter(t => t.id !== id);

if (todos.length === filteredTodos.length) {
console.log("❌ Todo not found");
return;
  }

writeTodos(filteredTodos);
console.log("🗑️ Todo deleted!");
}


module.exports = {
  addTodo,
  listTodos,
  markDone,
  deleteTodo
};
