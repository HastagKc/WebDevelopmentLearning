let input = prompt("What would you like to do ?");
const todos = ["read Book", "Read Notes", "Read js"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("------Todo List-----------");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("--------------------------");
  } else if (input === "new") {
    const newTodo = prompt("Add new todo: ");
    todos.push(newTodo);
    console.log(`${newTodo} is added`);
  } else if (input === "delete") {
    const index = parseInt(
      prompt("Enter index of todo list you want to delete ?")
    );
    if (!Number.isNaN(index)) {
      let deleteTask = todos.splice(index, 1);
      console.log(`You have delete ${deleteTask}  sucessfully form todo list `);
    } else {
      console.log("Unknown Index");
    }
  }
  input = prompt("What would you like to do ?");
}
console.log("You quit sucessfully ");
