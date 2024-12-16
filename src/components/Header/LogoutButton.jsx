import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/loginService';


const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(navigate);
    if (onLogout) onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
