import React, { useState } from 'react';
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import {signInWithGoogle} from '../Firebase/firebase.utils';

import './SignIn.scss'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ emailInput, setEmailInput] = useState('');
  const [ passwordInput, setPasswordInput] = useState('');

  const handleChange = ({target}) => {
    const { value, name } = target;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'email':
        setEmailInput(value);
        return
      case 'password':
        setPasswordInput(value);
        return
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(emailInput);
    setPassword(passwordInput);
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" value={emailInput} type="email" required handleChange={handleChange} label="Email" />
        <FormInput name="password" value={passwordInput} type="password" required handleChange={handleChange} label="Password" />
        <div className="buttons">
          <Button type="submit" children={"Submit"} />
          <Button onClick={signInWithGoogle} children={"Sign in with Google"} isGoogleSignIn />
        </div>
      </form>
    </div>
  );
}

export default SignIn;