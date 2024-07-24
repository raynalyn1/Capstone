import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../../components/AdminLayout';
import Video from './Video';
import Games from './Games';
import Dashboard from './Dashboard';

const LandingPageAd = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="video" element={<Video />} />
        <Route path="games" element={<Games />} />
        <Route index element={<Dashboard />} /> 
      </Route>
    </Routes>
  );
};

export default LandingPageAd;
