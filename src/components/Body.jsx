import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import LoginPage from "./LoginPage/Body.jsx";
import RegistrationPage from "./RegistrationPage/Body.jsx";
import DashboardPage from "./DashboardPage/Body.jsx";
import PropertyDetailsPage from "./PropertyDetailsPage/Body.jsx";
import PropertyListingPage from "./PropertyListingPage/Body.jsx";
import AdminPanel from "./AdminPanel/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
        <Route path="/propertydetailspage" element={<PropertyDetailsPage />} />
        <Route path="/propertylistingpage" element={<PropertyListingPage />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
};

export default Body;