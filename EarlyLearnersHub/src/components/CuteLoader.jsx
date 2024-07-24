// src/components/LoadingSpinner.jsx
import React from 'react';
import spinnerImage from '../assets/Images/load.png'; // Add a cute spinner image in your assets

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src={spinnerImage} alt="Loading..." className="spinner-image" />
      <div className="spinner-text">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
