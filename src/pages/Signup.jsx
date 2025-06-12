import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/authSlice';
import SignupForm from '../components/SignupForm';

export default function Signup() {
  const dispatch = useDispatch();
  const onSignup = ({ email, password }) =>
    dispatch(loginUser({ email, password }));

  return <SignupForm onSignup={onSignup} />;
}