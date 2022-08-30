import React from 'react';
import { Route, Routes } from 'react-router';

// PAGES
import ProtectedRoutes from './ProtectedRoutes';
import HomePage from './HomePage';

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/*" element={<ProtectedRoutes />} />
    </Routes>
  );
};

export default MainContent;
