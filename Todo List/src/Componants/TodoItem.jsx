import React, { useState } from 'react'
import useToto from '../Context/TodoContext';

function TodoItem({ todo }) {
    const [todoMsg,setTodoMsg] = useState(todo.todoText)
    const [isTodoEditable,setIsTodoEditable] = useState(false)
    const {chkbokCheckTodoMai,deleteKaroTodoMai,updateKaroTodoMai} =  useToto()

    const editTodo = () =>{
        updateKaroTodoMai(todo.id,{...todo, todoText : todoMsg})
        setIsTodoEditable(false)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => chkbokCheckTodoMai(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />  
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                // When we use button onclick we are just changing the value of  IsTodoEditable Stste Simple !!!!
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteKaroTodoMai(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
