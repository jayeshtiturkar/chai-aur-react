import React from 'react'
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const Profile = () => {

    const {user} = useContext(UserContext);
    if (!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile