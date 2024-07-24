// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPageAd from './Pages/admin/LandingPageAd';
import UserPage from './Pages/user/UserPage';
import ErrorBoundary from './components/ErrorBoundary';
import LandingPage from './Pages/LandingPage';
import Auth from './Pages/Auth';
import LandingPageAd from './Pages/Admin/LandingPageAd';
import Faq from './Pages/Faq';

function App() {
  return (
    
      <Router>
        <ErrorBoundary>
        <Routes>
          <Route path="/admin/*" element={<LandingPageAd />} />
          <Route path="/user/*" element={<UserPage />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/" element={<LandingPage />} /> {/* Default route */}
        </Routes>
        </ErrorBoundary>
      </Router>
    
  );
}

export default App;
