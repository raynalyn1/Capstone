import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { name, email, password, password2 });
      // Handle success response
      console.log('Registered:', response.data);
    } catch (error) {
      // Handle error response
      console.error('Error registering:', error.response.data);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Confirm your password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
