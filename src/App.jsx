import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header';
import AdminMenu from './components/AdminMenu';
//import Footer from './components/Footer/Fotter';
import './styles/global.css';

function App() {
    return (
        <Router>
            <div className='app'>
                <Header />
                <AdminMenu />
                <main>
                <AppRoutes />
                </main>
            </div>
        </Router>
    );
}

export default App;
            