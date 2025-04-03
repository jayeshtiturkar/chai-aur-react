import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            todotext: "Hello Word"
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todokilist',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todotext: action.payload
            }
            state.todos.push(todo)
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((preve) => (preve.id !== action.payload))

        },
        updateTodo : (state, action) =>{
            const {id} = action.payload
            state.todos = state.todos.map((preve)=> (preve.id === id ? action.payload : preve))
        }
    }

})

export const { addTodo, deleteTodo,updateTodo } = todoSlice.actions

export default todoSlice.reducer