import { useState } from 'react';
import './App.css'
import Button from './Componants/Button';
import Card from './Componants/Card';
import { ThemeProvider } from './Context/theme'
import { useEffect } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState("ligth");

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

   // actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

 

  return (

    <ThemeProvider value={{themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
