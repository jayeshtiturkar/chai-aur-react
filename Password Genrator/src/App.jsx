import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [schar, setSchar] = useState(false)
  const [password, setPassword] = useState("")

  const genratePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "1234567890"
    if (schar) str += "!@#$%^&*()_+-=[]{}|;:',.<>?/~`"
    for (let index = 1; index <= length; index++) {
      let random = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(random)
    }
    setPassword(pass)
  }, [length, number, schar])

  const takeit = useRef(null)

  const copyClipBordText = () => {
    takeit.current?.select()
    takeit.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)
  }
  useEffect(() => {
    genratePassword()
  }, [length, number, schar, genratePassword])

  return (
    <div className='bg-slate-500 p-4'>
      <div>
        <input className='border-collapse text-4xl' placeholder="password" readOnly value={password} ref={takeit} />
        <button className='bg-blue-500 text-4xl m-2' onClick={copyClipBordText}>Copy</button>
      </div>
      <div className='justify-center flex ml-4 text-2xl'>
        <div className='ml-4'>
          <input type="range"
            value={length}
            max={50}
            min={6}
            onChange={(e) => setLength(e.target.value)} />
          <label className='ml-2'>Length : {length}</label>
        </div>
        <div className='mx-4'>
          <input type="checkbox" defaultChecked={number} onChange={() => setNumber(jay => !jay)} />
          <label className='ml-2' >Numbers</label>
        </div>
        <div>
          <input type="checkbox" defaultValue={schar} onChange={() => setSchar(bhu => !bhu)} />
          <label className='ml-2'>Character</label>
        </div>

      </div>
    </div>

  )
}

export default App
