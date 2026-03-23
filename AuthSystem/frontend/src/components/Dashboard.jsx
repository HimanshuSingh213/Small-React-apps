import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");


    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    useEffect(() => {
        const fetchProtectedData = async () => {
            const token = localStorage.getItem("token");

            try {
                const response = await fetch("http://localhost:19400/dashboard",{
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error("Token expired or invalid");
                }

                setUserData(data);
            } catch (err) {
                // If the backend rejects the token, forcing for a logout
                setError("Session expired. Please log in again.");
                localStorage.removeItem("token");
                navigate("/login");
            }
        }

        fetchProtectedData();
    },[navigate])

    return (
        <div className='flex items-center justify-center text-white/90 bg-neutral-950 gap-5 flex-col min-h-screen min-w-screen'>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    {/* Display the message sent from the backend */}
                    <p className="text-green-400">{userData ? userData.message : "Loading backend data..."}</p>
                    <p>Simon Go Back!!!</p>
                </>
            )}
            <button
                onClick={handleLogout}
                className='px-2 py-1 rounded-lg bg-blue-600 text-white font-bold cursor-pointer'>Log Out</button>
        </div>
    )
}

export default Dashboard