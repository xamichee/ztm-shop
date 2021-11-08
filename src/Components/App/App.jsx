import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import Header from '../Header/Header';
import SignInUp from '../Sign-In-Up/Sign-In-Up';
import Homepage from '../Homepage/Homepage';
import Shop from '../Shop/Shop';
import Checkout from "../Checkout/Checkout";

import { selectCurrentUser } from "../../redux/user/user.selectors";

function App({currentUser}) {

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


export default connect(mapStateToProps)(App);
