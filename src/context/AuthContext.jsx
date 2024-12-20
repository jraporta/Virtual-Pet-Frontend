import React, { useState, useEffect } from 'react';
import { loginRequest, registerRequest } from '../services/authService';
import { userDataRequest } from '../services/userService';

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        console.log('Context updated: ', user);
    }, [user]);

    const updateUserData = async (username) => {
        const data = await userDataRequest(username);
        localStorage.setItem('username', data.name)
        localStorage.setItem('id', data.id);
        localStorage.setItem('role', data.role);
        setUser({ 'id': data.id, 'username': data.name, 'isAdmin': data.role=="ADMIN"})
    }

    const login = async (credentials) => {
        try {
            const tokenResponse = await loginRequest(credentials.username, credentials.password)
            setToken(tokenResponse);
            localStorage.setItem('token', tokenResponse);
            setIsAuthenticated(true);
            await updateUserData(credentials.username);
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const register = async (credentials) => {
        try {
            const tokenResponse = await registerRequest(credentials.username, credentials.password)
            setToken(tokenResponse);
            localStorage.setItem('token', tokenResponse);
            setIsAuthenticated(true);
            await updateUserData(credentials.username);
        } catch (error) {
            console.error('Register failed:', error);
            throw error;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setToken(null);
        localStorage.clear();
    };

    const value = {
        isAuthenticated,
        user,
        token,
        login,
        register,
        logout
    }

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};