import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import './Homepage.scss'

function Homepage() {
  const menuItems = ["HATS", "JACKETS", "SNEAKERS", "WOMEN'S", "MEN'S"];

  return (
    <div className="homepage">
      <div className="directory-menu">
        {menuItems.map(elem => <MenuItem key={elem} title={elem} subtitle="SHOP NOW" />)}
      </div>
    </div>
  );
}

export default Homepage;