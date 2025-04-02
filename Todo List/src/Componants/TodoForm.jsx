import React, { useState } from 'react'
import useToto from '../Context/TodoContext'

function TodoForm() {
    
    const [todoText, setTodoText] = useState("")
    const { addKaroTodoMai } = useToto()

    const subText = (e) => {
        e.preventDefault()
        if (!todoText) return
        addKaroTodoMai({ todoText, completed: false })
        setTodoText("")

    }


    return (
        <form onSubmit={subText} className="flex">
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

