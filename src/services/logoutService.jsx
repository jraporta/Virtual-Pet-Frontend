import React from 'react';
import { useNavigate } from 'react-router-dom';


export const logout = async () => {
    const navigate = useNavigate();

    localStorage.clear();
    navigate('/home');
}