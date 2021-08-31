import React from 'react';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

import './Sign-In-Up.scss'

function SignInUp() {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInUp;