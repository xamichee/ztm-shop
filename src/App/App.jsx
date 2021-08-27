import React, {useState, useEffect} from "react";
import {Route, Switch} from 'react-router-dom';
import {auth} from "../Firebase/firebase.utils";

import Header from "../Header/Header";
import SignInUp from "../Sign-In-Up/Sign-In-Up";
import Homepage from "../Homepage/Homepage";
import Shop from "../Shop/Shop";

import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => setCurrentUser(user));
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
