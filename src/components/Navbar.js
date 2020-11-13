import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const Navbar = () => {
    //destructs todos for length use
    const { todos } = useContext(TodoContext);

    //removes 's' from last word if only 1 task exists
    const counter = todos.length === 1 ? (
        <p>You have { todos.length } impending task.</p>
    ) : (
        <p>You have { todos.length } impending tasks.</p>
    )

    return (
        <div className="navbar">
            <h1>todos</h1>
            { counter }
        </div>
    );
}
 
export default Navbar;