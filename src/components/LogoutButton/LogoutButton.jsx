import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/logoutService';


const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
