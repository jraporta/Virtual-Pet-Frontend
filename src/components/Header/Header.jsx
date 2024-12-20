import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginForm from '../auth/LoginForm';
import LogoutButton from './LogoutButton';
import { useAuth } from '../../context/AuthContext';
import '../../styles/Header.css';

function Header() {
    const { isAuthenticated, user } = useAuth();

    useEffect(() =>{
        console.log('Header rendered or updated');
    }, [isAuthenticated]);

    const handleLogin = (credentials) => {
        console.log('Login attempt from Header: ', credentials);
    }

    const handleLogout = () => {
        console.log('Logout attempt from Header');
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
                            to="/dashboard"
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
                { isAuthenticated && user ? (
                    <div>
                    <p>Welcome {user.username}!</p>
                    <LogoutButton onLogout={handleLogout} />
                </div>
                ) : (
                    <div>
                        <LoginForm onLogin={handleLogin} />
                    </div>
                )
                }
            </div>
        </header >
    );
}

export default Header;
