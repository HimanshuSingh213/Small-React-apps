import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Dashboard from "./components/Dashboard";

function App() {

  const isAuthenticated = () => {
    return localStorage.getItem("token");
  };

  return (

    <Routes>
      <Route path="/" element={
        isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
      } />
      <Route path="/login" element={
        isAuthenticated() ? <Navigate to="/dashboard" /> : <LoginPage />
      } />
      <Route path="/dashboard" element={
        isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
      } />
    </Routes>

  )
}

export default App
