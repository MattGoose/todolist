import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

//grabs todo object from local storage and maps them to screen
const TodoList = () => {
    const { dispatch, todos } = useContext(TodoContext);
    return todos.length ? (
        <div className="todo-list">
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id} onClick={() => dispatch({type: 'REMOVE_TODO', id: todo.id})} >
                            <div>// { todo.todo }</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            You've no todos to do
        </div>
    )
}
 
export default TodoList;