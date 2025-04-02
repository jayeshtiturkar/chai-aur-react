import { useEffect, useState } from 'react';
import './App.css'
import { TodoContextProvider } from './Context/TodoContext'
import TodoForm from './Componants/TodoForm';
import TodoItem from './Componants/TodoItem';

function App() {
  const [todokiList, setTodokiList] = useState([]);

  const addKaroTodoMai = (data) => { setTodokiList((pooranilist) => [{ id: Date.now(), ...data }, ...pooranilist]) }

  const deleteKaroTodoMai = (id) => { setTodokiList((pooranilist) => pooranilist.filter((item) => item.id !== id)) }

  const updateKaroTodoMai = (id, data) => {
    setTodokiList((pooranilist) => pooranilist.map((item) => (item.id === id ? data : item)))
  }

  const chkbokCheckTodoMai = (id) => {
    setTodokiList((pooranilist) => pooranilist.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }
  useEffect(() => {
    const listoflocalstorage = JSON.parse(localStorage.getItem("prevlist"))
    if (listoflocalstorage && listoflocalstorage.length > 0) {
      setTodokiList(listoflocalstorage)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("prevlist", JSON.stringify(todokiList))
  }, [todokiList]);

  return (
    <TodoContextProvider value={{ todokiList, addKaroTodoMai, deleteKaroTodoMai, updateKaroTodoMai, chkbokCheckTodoMai }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todokiList.map((item) => (
                <div key={item.id} className='w-full'>
                  <TodoItem todo={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
