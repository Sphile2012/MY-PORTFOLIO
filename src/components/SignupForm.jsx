import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    console.log('Signup data:', formData);
    // TODO: Handle actual signup (API/Firebase/etc.)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-red-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account 🏡</h2>
        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-red-500 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;