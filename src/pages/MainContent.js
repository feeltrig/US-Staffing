import React from 'react';
import { Route, Routes } from 'react-router';

// PAGES
import ProtectedRoutes from './ProtectedRoutes';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import About from './About';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Contactus" element={<ContactUs />} />
      <Route path="/About" element={<About />} />
      <Route path="/user/*" element={<ProtectedRoutes />} />
    </Routes>
  );
};

export default MainContent;
