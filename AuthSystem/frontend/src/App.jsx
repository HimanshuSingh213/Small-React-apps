import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

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
      
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
      
    </Routes>
  );
}

export default App
