// src/components/UserLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import UserNavbar from './UserNavbar';

const UserLayout = () => {
  return (
    <div className="flex">
      <UserNavbar />
      <div className="flex-grow p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
