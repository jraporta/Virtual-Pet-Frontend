import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import LogoutButton from '../LogoutButton/LogoutButton';
import './Header.css'; // Import associated styles

function Header() {
    const [username, setUsername] = useState(null);

    useEffect(() =>{
        setUsername(localStorage.getItem('username'));
    }, []);

    const handleLogin = (credentials) => {
        console.log('Login attempt from Header', credentials);
        setUsername(credentials);
    }

    const handleLogout = () => {
        console.log('Logout success from Header');
        setUsername(null);
    }

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">DigiPets</Link>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            Log In
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                {!username ? (
                    <div>
                        <LoginForm onLogin={handleLogin} />
                    </div>
                ) : (
                    <div>
                        <p>Welcome {localStorage.getItem('username')}!</p>
                        <LogoutButton onLogout={handleLogout} />
                    </div>
                )
                }
            </div>
        </header >
    );
}

export default Header;
