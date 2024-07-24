// src/components/UserNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const userLinks = [
  { name: 'Home', path: '/user/home' },
  { name: 'Profile', path: '/user/profile' },
  { name: 'Settings', path: '/user/settings' },
];

const UserNavbar = () => {
  return (
    <div className="h-screen w-64 bg-blue-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">User Dashboard</div>
      <nav className="flex-grow">
        <ul>
          {userLinks.map((link, index) => (
            <li key={index} className="p-4 hover:bg-blue-700">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;
