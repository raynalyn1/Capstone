// src/AuthToggle.jsx

import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Updated for react-router-dom v6
import LoginForm from '../components/LoginForm'; // Import LoginForm component
import SignupForm from '../components/SignupForm'; // Import SignupForm component

const Auth = () => {
  const [role, setRole] = useState('');
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Updated for react-router-dom v6

  const handleRoleSelection = (selectedRole) => {
    if (selectedRole === 'student') {
      setIsStudentModalOpen(true);
    } else {
      setRole(selectedRole);
    }
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    setIsStudentModalOpen(false);
    setRole('student');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const resetRole = () => {
    setRole('');
  };

  const goBackToLandingPage = () => {
    navigate('/'); // Updated for react-router-dom v6
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={goBackToLandingPage}
        className="absolute top-4 left-4 text-gray-700 hover:text-gray-900"
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
      </button>
      {!role && (
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md text-center">
          <h1 className="text-2xl font-bold">Select Your Role</h1>
          <button
            onClick={() => handleRoleSelection('student')}
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Student
          </button>
          <button
            onClick={() => handleRoleSelection('parent')}
            className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
          >
            Parent
          </button>
          <button
            onClick={() => handleRoleSelection('teacher')}
            className="w-full px-4 py-2 mt-4 text-white bg-purple-500 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          >
            Teacher
          </button>
        </div>
      )}

      {role && role !== 'student' && (
        <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold text-center">{isLogin ? 'Login' : 'Sign Up'}</h1>
          {isLogin ? <LoginForm /> : <SignupForm />}
          <button
            onClick={toggleForm}
            className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </button>
          <button
            onClick={resetRole}
            className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Back
          </button>
        </div>
      )}

      <Modal
        isOpen={isStudentModalOpen}
        onRequestClose={() => setIsStudentModalOpen(false)}
        className="w-full max-w-md p-8 mx-auto my-20 bg-white rounded shadow-md"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold text-center">Student Registration</h2>
        <form onSubmit={handleStudentSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              type="number"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
          >
            Register
          </button>
          <button
            onClick={() => setIsStudentModalOpen(false)}
            className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Back
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Auth;

