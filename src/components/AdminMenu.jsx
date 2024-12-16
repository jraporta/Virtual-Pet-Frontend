import React, { useState, useEffect } from 'react';
import '../styles/AdminMenu.css';

function AdminMenu() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const checkAdminRole = () => {
        const userRole = localStorage.getItem('role') || {};
        setIsAdmin(userRole === 'ADMIN');
    };

    useEffect(() => {
        checkAdminRole();
        // Optionally add an event listener for storage updates
        const handleStorageChange = () => checkAdminRole();
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleMenu = () => {
        setIsVisible((prev) => !prev);
    };

    if (!isAdmin) {
        return null; // Do not render the menu if the user is not an admin
    }

    return (
        <div className={`admin-menu ${isVisible ? 'visible' : 'hidden'}`}>
            <button className="toggle-button" onClick={toggleMenu}>
                {isVisible ? 'Hide Menu' : 'Admin Menu'}
            </button>
            <div className="menu-content">
                <h3>Admin Menu</h3>
                <ul>
                    <li>
                        <button onClick={() => console.log('Show all users')}>
                            Show All Users
                        </button>
                    </li>
                    <li>
                        <button onClick={() => console.log('Show all pets')}>
                            Show All Pets
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminMenu;
