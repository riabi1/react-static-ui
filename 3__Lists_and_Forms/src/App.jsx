import TodoItem from "./components/TodoItem";
const App = () => {
  const todos = [
    { id: 1, text: "Learn React lists", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Master forms", completed: false }
  ];
  return (
    <div>
      <h1 className="text-lg font-bold text-center">Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
