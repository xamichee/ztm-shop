import React from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import Shop from "../Shop/Shop";
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
