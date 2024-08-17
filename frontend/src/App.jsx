// src/App.js
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { CreateProvider } from './Context/CreateContext';
import AppRoutes from './Routes'; // Import your routes

const App = () => {
  return (
    <CreateProvider>
      <Header />
      <SearchBar />
      <AppRoutes /> {/* Routing handled by AppRoutes */}
      <Footer />
    </CreateProvider>
  );
};

export default App;
