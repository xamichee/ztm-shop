import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {auth, createUserProfileDocument} from '../Firebase/firebase.utils';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import SignInUp from '../Sign-In-Up/Sign-In-Up';
import Homepage from '../Homepage/Homepage';
import Shop from '../Shop/Shop';

import {setCurrentUser} from '../redux/user/user.actions';

import './App.css';

function App({setCurrentUser}) {

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
  }, []);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/signin' component={SignInUp}/>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
