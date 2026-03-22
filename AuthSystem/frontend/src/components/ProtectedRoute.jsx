import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const token = localStorage.getItem("token");

    // if user doesnt have token then redirect to login
    if(!token) return <Navigate to="/login" replace />

    // if user does have token then let them see the protected items
    return <Outlet/>
}

export default ProtectedRoute;