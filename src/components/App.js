import React from 'react';
import SignupUser from '../containers/SignupUser';
import LoginUser from '../containers/LoginUser';

export default function App() {
  return (
    <>
      <h2>Signup?</h2>
      <SignupUser />
      <h2>Or Login</h2>
      <LoginUser />
    </>
  );
}
  
