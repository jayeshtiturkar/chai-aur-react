import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            todotext: "Hello Word",
            iseditable : true
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todokilist',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const {todotext,iseditable} = action.payload
            const todo = {
                id: nanoid(),
                todotext: todotext,
                iseditable : iseditable
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