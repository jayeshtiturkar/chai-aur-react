import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todoSlice'
import useToto from '../context/todoContext'

const AddTodo = () => {
    const { edit } = useToto()
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [iseditable2, useIseditable2] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        useIseditable2(edit.iseditable)
        setInput2(edit.text)
    }, [edit]);

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input1 == "") return;
        dispatch(addTodo({todotext : input1, iseditable : true}))
        setInput1("")   
    }

    const updateHandler = (e) => {
        e.preventDefault()
        if (input2 == "") return;
        dispatch(updateTodo({id : edit.id, todotext : input2, iseditable : true}))
        setInput2("")
        useIseditable2(false)
    }

    if (iseditable2) {
        return (

            <form onSubmit={updateHandler} className="space-x-3 mt-12">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Update Todo
                </button>
            </form>
        )
    }
    else {
        return (

            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Add Todo
                </button>
            </form>
        )
    }
}





export default AddTodo