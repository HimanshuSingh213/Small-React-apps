import React from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className='flex items-center justify-center text-white/90 bg-neutral-950 gap-5 flex-col min-h-screen min-w-screen'>
            <p>Simon Go Back!!!</p>
            <button
                onClick={handleLogout}
                className='px-2 py-1 rounded-lg bg-blue-600 text-white font-bold cursor-pointer'>Log Out</button>
        </div>
    )
}

export default Dashboard