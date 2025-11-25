import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div className='flex flex-col justify-center items-center text-white bg-amber-600 p-2 rounded-xl mt-2'>
        <h2>Login</h2>
        <input className='outline-0 border-2 border-amber-800 p-2 rounded-lg mb-2'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text" placeholder='username' />
        <input className='outline-0 border-2 border-amber-800 p-2 rounded-lg mb-2'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text" placeholder='password' />
        <button className='bg-amber-800 rounded-lg px-2 py-1 cursor-pointer'
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login