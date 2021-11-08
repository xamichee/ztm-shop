import React, {useState} from 'react';
import {connect} from "react-redux";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import { googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";

import './SignIn.scss'

function SignIn({googleSignInStart, emailSignInStart}) {
  const [userData, setUserData] = useState({email: '', password: ''});
  const {email, password} = userData;

  const handleChange = ({target}) => {
    const {value, name} = target;
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(userData)
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" value={email} type="email" required handleChange={handleChange} label="Email"/>
        <FormInput name="password" value={password} type="password" required handleChange={handleChange}
                   label="Password"/>
        <div className="buttons">
          <Button type="submit" children={"Submit"}/>
          <Button type="button" onClick={googleSignInStart} children={"Sign in with Google"} isGoogleSignIn/>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = {googleSignInStart, emailSignInStart}

export default connect(null, mapDispatchToProps)(SignIn);