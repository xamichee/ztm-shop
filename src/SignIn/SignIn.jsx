import React, { useState } from 'react';
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import { auth, signInWithGoogle } from '../Firebase/firebase.utils';

import './SignIn.scss'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = ({target}) => {
    const { value, name } = target;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'email':
        setEmail(value);
        return
      case 'password':
        setPassword(value);
        return
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" value={email} type="email" required handleChange={handleChange} label="Email" />
        <FormInput name="password" value={password} type="password" required handleChange={handleChange} label="Password" />
        <div className="buttons">
          <Button type="submit" children={"Submit"} />
          <Button onClick={signInWithGoogle} children={"Sign in with Google"} isGoogleSignIn />
        </div>
      </form>
    </div>
  );
}

export default SignIn;