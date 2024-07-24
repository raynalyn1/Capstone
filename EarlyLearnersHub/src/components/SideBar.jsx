// src/components/SideBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ links = [] }) => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Admin Dashboard</div>
      <nav className="flex-grow flex flex-col">
        <ul>
          {links.map((link, index) => (
            <button key={index} className="p-4 w-full text-left hover:bg-gray-700">
              <Link to={link.path}>{link.name}</Link>
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
