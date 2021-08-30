import React, {useState} from 'react';
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import {auth, createUserProfileDocument} from "../Firebase/firebase.utils";

import './SignUp.scss'

function SignUp() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = ({target}) => {
    const {value, name} = target;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'displayName':
        setDisplayName(value);
        return;
      case 'email':
        setEmail(value);
        return
      case 'password':
        setPassword(value);
        return
      case 'confirmPassword':
        setConfirmPassword(value);
        return
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName});
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="displayName" value={displayName} type="text" required handleChange={handleChange}
                   label="displayName"/>
        <FormInput name="email" value={email} type="email" required handleChange={handleChange} label="Email"/>
        <FormInput name="password" value={password} type="password" required handleChange={handleChange}
                   label="Password"/>
        <FormInput name="confirmPassword" value={confirmPassword} type="password" required handleChange={handleChange}
                   label="confirmPassword"/>
        <Button type="submit" children={"SIGN UP"}/>
      </form>
    </div>
  );
}

export default SignUp;