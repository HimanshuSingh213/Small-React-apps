import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div className='text-white bg-gray-800 p-3 rounded-lg mt-3'>Please Login</div>

    return <div className='text-white bg-gray-800 p-3 rounded-lg mt-3'> Welcome {user.username}</div> 
}

export default Profile