// src/components/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const links = [
  { name: 'Dashboard', path: '/admin/dashboard' },
  { name: 'Video', path: '/admin/video' },
  { name: 'Games', path: '/admin/games' },
];

const AdminLayout = () => {
  return (
    <div className="flex">
      <SideBar links={links} />
      <div className="flex-grow p-3 bg-slate-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
