// src/pages/user/UserPage.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const UserPage = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route index element={<Home />} />  {/* Default Route */}
      </Route>
    </Routes>
  );
};

export default UserPage;
