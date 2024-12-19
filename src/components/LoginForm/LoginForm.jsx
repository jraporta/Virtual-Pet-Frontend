import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest, registerRequest } from '../../services/authService';
import { login } from '../../services/loginService';
import '../../styles/LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await loginRequest(username, password);
      login(navigate, username, token);
      console.log('Login successful:', token);
      onLogin(username);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      console.error('Login failed', err);
    }
  };

  const handleRegister = async () => {
    try {
      const token = await registerRequest(username, password);
      login(navigate, username, token);
      console.log('Register successful:', token);
    } catch (err) {
      setError(err.response?.data?.message || 'Register failed. Please try again.');
      console.error('Register failed', err);
    }
  };

  const handleSubmit = async (e, action) => {
    e.preventDefault();
    if (action === 'login') {
      handleLogin();
    } else if (action === 'register') {
      handleRegister();
    }
  };

  return (
    <form className="login-form" onSubmit={(e) => {
      e.preventDefault();
      // Form validation will automatically happen before this is called
      const action = e.nativeEvent.submitter.value; // 'login' or 'register'
      handleSubmit(e, action);
    }}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
      </div>
      <div className="button-container">
        <button
          type="submit"
          value="login"
          className="login-button"
        >
          Log In
        </button>
        <span className="separator">or</span>
        <button
          type="submit"
          value="register"
          className="login-button"
        >
          Register
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default LoginForm;
