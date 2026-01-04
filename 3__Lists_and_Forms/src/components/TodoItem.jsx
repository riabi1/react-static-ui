const TodoItem = ({ todo , onDelete }) => {
    return (
        <li className='border p-4 m-4 rounded flex justify-between items-center'>
            {todo.text}
            <button onClick={() => onDelete(todo.id)} className="bg-red-500 text-white p-2 rounded ml-4">Delete</button>
        </li>
    )
}
export default TodoItem