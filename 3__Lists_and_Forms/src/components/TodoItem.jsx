const TodoItem = ({ todo }) => {
    return (
        <li className='border p-4 m-4 rounded'>
            {todo.text}
        </li>
    )
}
export default TodoItem