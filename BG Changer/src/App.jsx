import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("purple")
  const listOfColors = {
    black: "Black",
    red: "Red",
    blue: "Blue",
    green: "Green",
    yellow: "Yellow",
    purple: "Purple",
    orange: "Orange"
  };
  return (
    <div className='w-screen h-screen' style={{ backgroundColor: color }}>
      <div className=''>
      {
        Object.entries(listOfColors).map(([key, value]) => (
          <button onClick={() => setColor(value)} type="button" className="px-8 py-3 ml-3 font-bold border
            text-amber-50 rounded  dark:border-gray-100 dark:text-gray-100" style={{ backgroundColor: value }}>
            {key}
          </button>
        ))
      }
      </div>
    </div>
  )
}

export default App
