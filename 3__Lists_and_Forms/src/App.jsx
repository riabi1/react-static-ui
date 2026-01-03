const App = () => {
  const todos = [
    { id: 1, text: "Learn React lists", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Master forms", completed: false }
  ];
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
