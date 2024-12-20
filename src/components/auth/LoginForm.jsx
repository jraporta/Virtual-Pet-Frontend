import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../../styles/LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const { login, register } = useAuth();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({ username: '', password: '' });

  const handleLogin = async () => {
    if (onLogin) onLogin(credentials);
    try {
      await login(credentials);
      console.log('Login successful');
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data || 'Login failed. Please try again.');
      console.error('Login failed', err);
    }
  };

  const handleRegister = async () => {
    try {
      await register(credentials);
      console.log('Register successful:', token);
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data || 'Register failed. Please try again.');
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
          onChange={(e) => {
            setUsername(e.target.value)
            setCredentials(prev => ({ ...prev, username: e.target.value }))
          }}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setCredentials(prev => ({ ...prev, password: e.target.value }))
          }}
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
