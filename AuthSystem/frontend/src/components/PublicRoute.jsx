import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const token = localStorage.getItem("token");

    // If the user already has a token, forcing them to the dashboard
    if(token) return <Navigate to="/dashboard" replace />

    // If they don't have a token, letting them see the login page
    return <Outlet/>
}

export default PublicRoute;