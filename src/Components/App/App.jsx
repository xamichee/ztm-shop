import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import Header from '../Header/Header';
import SignInUp from '../Sign-In-Up/Sign-In-Up';
import Homepage from '../Homepage/Homepage';
import Shop from '../Shop/Shop';
import Checkout from "../Checkout/Checkout";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import {checkUserSession} from '../../redux/user/user.actions';

function App({currentUser, checkUserSession}) {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route exact path='/checkout' component={Checkout}/>
        <Route exact path='/signin'
               render={() => currentUser ? (<Redirect to='/'/>) : (<SignInUp/>)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {checkUserSession};


export default connect(mapStateToProps, mapDispatchToProps)(App);
