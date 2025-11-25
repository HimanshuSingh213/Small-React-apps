import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-800 flex justify-center items-center h-20 text-xl text-white font-medium w-full rounded-2xl my-3 mx-2 p-4'>User: {userid}</div>
  )
}

export default User