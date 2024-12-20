import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/auth/LoginPage";
import Contact from "../pages/Contact"
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Pet from "../components/Pet";
import ShowUsers from "../pages/AdminUsersDashboard";
import ShowPets from "../pages/AdminPetsDashboard";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "./ProtectedRoute";
import RestrictedRoute from "./RestrictedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pet" element={<ProtectedRoute><Pet /></ProtectedRoute>} />
            <Route path="/admin/pets" element={<RestrictedRoute><ShowPets /></RestrictedRoute>} />
            <Route path="/admin/users" element={<RestrictedRoute><ShowUsers /></RestrictedRoute>} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
    );
};

export default AppRoutes;
