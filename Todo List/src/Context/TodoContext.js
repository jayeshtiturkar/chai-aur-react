import { createContext, useContext } from "react";

const ToListKaContext = createContext({
    todos : {
        id : 1,
        text : "",
        completed : false
    },
    addTodo : (data) => {},
    deleteTodo : (id) => {},
    editToto : (id,text) => {},
    todoCheckbox : (id) =>{}

})

export const TodoContextProvider = ToListKaContext.Provider

export default function useToto() {
    return useContext(ToListKaContext)
}