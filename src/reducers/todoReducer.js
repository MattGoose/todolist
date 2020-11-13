import { v4 } from 'uuid'

//list of action types for adding/removing todos
export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                todo: action.todo.todo,
                id: v4()
            }]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}