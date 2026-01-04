import { useState } from "react";

import TodoItem from "./components/TodoItem";
const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React lists", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Master forms", completed: false }
  ]);


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    if (value.trim() === '') return; // Guard clause
    addTodo(value); // Call it here
    setValue(''); // Clear input
  }
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <h1 className="text-lg font-bold text-center">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new todo"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
        >
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo}/>
        ))}
      </ul>
    </div>
  )
}
export default App