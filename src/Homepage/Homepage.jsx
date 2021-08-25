import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './Homepage.scss'

import menuItems from "../Data/menuItems";

export default function Homepage() {

  return (
    <div className="homepage">
      <div className="directory-menu">
        {menuItems.map(({id, title, image, size}) =>
          <MenuItem key={id} title={title} image={image} size={size} subtitle="SHOP NOW"/>)}
      </div>
    </div>
  );
};