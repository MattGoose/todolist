import React, { createContext, useEffect, useReducer } from 'react'
import { todoReducer } from '../reducers/todoReducer'

//Context API replaces Redux
//serves as a central data store for state
export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    //takes in todoReducer and stores action types on dispatch
    //initialises state with an empty array
    //inline function checks if any data is stored locally,
    //which returns if true, else returns empty array
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    })

    //adds new item to local storage and refreshes page
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    //passes current list of todos and dispatch actions down component tree
    return (
        <TodoContext.Provider value={{todos, dispatch}} >
            { props.children }
        </TodoContext.Provider>
    );
}
 
export default TodoContextProvider;