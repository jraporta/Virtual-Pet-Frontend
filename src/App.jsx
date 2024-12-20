import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header';
import AdminMenu from './components/AdminMenu';
//import Footer from './components/Footer/Fotter';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import './styles/global.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </Router>
    );
}


function AppContent() {
    const { isAuthenticated, user } = useAuth();

    return (
        <div className='app'>
            <Header />
            {isAuthenticated && user?.isAdmin && <AdminMenu />}
            <main>
                <AppRoutes />
            </main>
        </div>
    );
}

export default App;
