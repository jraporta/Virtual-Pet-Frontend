import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import LogoutButton from './LogoutButton';
import '../../styles/Header.css';

function Header() {
    const [username, setUsername] = useState(null);

    const checkUsername = () => {
        const name = localStorage.getItem('username') || {};
        setUsername(name);
    };

    useEffect(() =>{
        const handleStorageChange = () => checkUsername();
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
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
                            to={!username ? "/login" : "/dashboard"}
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >
                            My Pets
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
