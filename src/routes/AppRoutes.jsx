import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Pet from "../components/Pet";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/pet" element={<Pet />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
    );
};

export default AppRoutes;
