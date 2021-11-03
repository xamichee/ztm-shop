import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import Header from '../Header/Header';
import SignInUp from '../Sign-In-Up/Sign-In-Up';
import Homepage from '../Homepage/Homepage';
import Shop from '../Shop/Shop';
import Checkout from "../Checkout/Checkout";

import { setCurrentUser } from '../../redux/user/user.actions';
import { selectCurrentUser } from "../../redux/user/user.selectors";

function App({setCurrentUser, currentUser}) {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        })
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
