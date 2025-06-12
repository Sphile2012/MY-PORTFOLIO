import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './features/authSlice';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Bookings from './pages/Bookings';

export default function App() {
  const user = useSelector(s => s.auth.user);
  const dispatch = useDispatch();

  return (
    <Router>
      <nav className="flex justify-between p-4 bg-gray-100 shadow-sm">
        <Link to="/" className="font-bold text-lg">PhumehBnB</Link>
        <div>
          {!user ? (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          ) : (
            <>
              <Link to="/bookings" className="mr-4">Bookings</Link>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/bookings" element={user ? <Bookings /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
