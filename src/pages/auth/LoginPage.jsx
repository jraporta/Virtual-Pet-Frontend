import React from 'react';
import LoginForm from '../../components/auth/LoginForm';


const LoginPage = () => {
    
    const handleLogin = (credentials) => {
        console.log('Login attempt from LoginPage: ', credentials);
    };

    return (
        <div className="login-page">
            <h1>Log In</h1>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
