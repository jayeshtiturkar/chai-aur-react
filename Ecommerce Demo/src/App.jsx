import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Componants/Footer'
import Header from './Componants/Header'

function App() {

  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
