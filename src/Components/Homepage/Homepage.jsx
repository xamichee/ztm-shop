import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './Homepage.scss'

import menuItems from "../../Data/menuItems";

export default function Homepage() {

  return (
    <div className="homepage">
      <div className="directory-menu">
        {menuItems.map(({id, ...otherProps}) =>
          <MenuItem key={id} {...otherProps}/>)}
      </div>
    </div>
  );
};