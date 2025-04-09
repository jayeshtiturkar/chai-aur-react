import React from 'react'
import authService from '../../../appWrite/auth.app'
import { logout } from '../../redux/auth'
import { useDispatch } from 'react-redux'

const LogOutBtn = () => {
    const dispatch = useDispatch()
    const onlogoutHandler = () =>{
        authService.logout().then(() =>{dispatch(logout())})
    }
    return (
        <button onClick={onlogoutHandler} className='inline-block px-6 py-2 duration-200
     hover:bg-blue-100 rounded-full'>Logout</button>
    )
}

export default LogOutBtn