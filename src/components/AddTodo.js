import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const AddTodo = () => {
    //destructs dispatch actions for use in component
    const { dispatch } = useContext(TodoContext);

    //initialises state and manipulation function
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', todo: {todo}})
        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="new todo" value={todo} 
            onChange={(e) => setTodo(e.target.value)} required />
            <input type="submit" value="add todo" />
        </form>
    );
}
 
export default AddTodo;