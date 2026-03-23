import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './components/LoginPage';
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";

function App() {

  return (
    <Routes>
<Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Route>
      
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
      
    </Routes>
  );
}

export default App
