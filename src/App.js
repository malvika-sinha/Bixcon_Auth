import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword'; 
import MouseToggle from './components/MouseToggle';

function App() {
  return (
    <Router>
      <MouseToggle /> {/* Add the MouseToggle component here */}
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Redirect all other paths to /register */}
        <Route path="*" element={<Navigate to="/register" />} />  
      </Routes>
    </Router>
  );
}

export default App;
