import './App.css'
import Login from './Componants/Login'
import Profile from './Componants/Profile'
import UserContextProvider from './Context/UserContextprovider'

function App() {
  return (
   <UserContextProvider>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
