import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import './Header.css'; // Import associated styles

function Header() {

    const handleLogin = (credentials) => {
        console.log('Login attempt from Header', credentials)
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
            <LoginForm onLogin={handleLogin} />
        </header >
    );
}

export default Header;
