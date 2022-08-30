import React from 'react';
import { Route, Routes } from 'react-router';

// PAGES
import ProtectedRoutes from './ProtectedRoutes';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

const MainContent = () => {
  return (
    <div className="mainContent">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/*" element={<ProtectedRoutes />} />
      </Routes>
    </div>
  );
};

export default MainContent;
