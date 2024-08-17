// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardDetail from './components/CardDetail';
import Cards from './components/Cards'; // Import Cards component to be used in routing

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} /> {/* Route for the cards list */}
      <Route path="/card/:title" element={<CardDetail />} /> {/* Dynamic route for card details */}
    </Routes>
  );
};

export default AppRoutes;
