import React from 'react';
import { useAuth } from '../../context/AuthContext';


const LogoutButton = ({ onLogout }) => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
    if (onLogout) onLogout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
