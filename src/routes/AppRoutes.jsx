import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Contact from "../pages/Contact"
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Pet from "../components/Pet";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pet" element={<Pet />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
    );
};

export default AppRoutes;
