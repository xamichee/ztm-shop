import React, {useState} from 'react';
import {connect} from "react-redux";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import { signUpStart  } from "../../redux/user/user.actions";

import './SignUp.scss'

function SignUp({signUpStart}) {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const {displayName, email, password, confirmPassword} = userData;

  const handleChange = ({target}) => {
    const {value, name} = target;

    setUserData({...userData, [name]: value})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({email, password, displayName});
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

const mapDispatchToProps = { signUpStart}

export default connect(null, mapDispatchToProps )(SignUp);