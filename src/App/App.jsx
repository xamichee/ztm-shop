import React, {useState, useEffect} from "react";
import {Route, Switch} from 'react-router-dom';
import {auth, createUserProfileDocument} from "../Firebase/firebase.utils";

import Header from "../Header/Header";
import SignInUp from "../Sign-In-Up/Sign-In-Up";
import Homepage from "../Homepage/Homepage";
import Shop from "../Shop/Shop";

import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

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
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/signin' component={SignInUp}/>
      </Switch>
    </div>
  );
}

export default App;
