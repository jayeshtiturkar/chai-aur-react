import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
    <h1>Login Here</h1>
    <input type="text"  placeholder= "UserName" value={username} onChange={(e) => setUsername(e.target.value)}/>
    {"  "}
    <input type="text"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button on onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login