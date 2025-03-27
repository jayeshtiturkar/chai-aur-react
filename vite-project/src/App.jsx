import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addCount = () =>{
    if(count == 20){
      alert("Counter Limit Reached")
      return
    }
    setCount(count + 1)
  }
  const removeCount = () =>{
    if(count == 0){
      alert("Counter Limit Reached")
      return
    }
    setCount(count - 1)
  }
  return (
   <>
   <h1>Counter Machine : {count}</h1>
   <button onClick={addCount}>Add Count </button>
   <button onClick={removeCount}> Remove Count</button>

   </>
  )
}

export default App
