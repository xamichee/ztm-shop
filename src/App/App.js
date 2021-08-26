import React from "react";
import {Route} from 'react-router-dom';
import Homepage from "../Homepage/Homepage";
import Shop from "../Shop/Shop";
import './App.css';

function App() {

  return (
    <div>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={Shop} />
    </div>
  );
}

export default App;
