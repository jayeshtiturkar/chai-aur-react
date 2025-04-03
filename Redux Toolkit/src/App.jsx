import { useState } from 'react'
import './App.css'
import AddTodo from './componants/AddTodo'
import TodoList from './componants/TodoList'
import { todoContext } from './context/todoContext'

function App() {
  const [edit, setEdit] = useState({})

  return (
    <todoContext.Provider value={{edit, setEdit}}>
      <h1 className='bg-slate-600 text-3xl m-4 p-4 text-white'>Hey This is Jayesh</h1>
      <AddTodo />
      <TodoList />
    </todoContext.Provider>
  )
}

export default App
