const TodoItem = ({ todo, onDelete, onToggle }) => {
    return (
        <li className="flex items-center justify-between mb-2 border p-2 rounded">
            <span
                className={todo.completed ? 'line-through cursor-pointer' : 'cursor-pointer'}
                onClick={() => onToggle(todo.id)}
            >
                {todo.text}
            </span>
            <button
                onClick={() => onDelete(todo.id)}
                className="bg-red-500 text-white p-2 rounded ml-4"
            >
                Delete
            </button>
        </li>
    )
}
export default TodoItem