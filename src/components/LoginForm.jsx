import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // TODO: Add authentication logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-white px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back 👋</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition font-semibold"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-red-500 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;