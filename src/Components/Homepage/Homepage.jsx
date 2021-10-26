import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import {connect} from "react-redux";
import { createStructuredSelector} from "reselect";
import { selectDirectoryMenuItems } from "../../redux/directory/directory.selector";

import './Homepage.scss'

function Homepage({ menuItems }) {
  return (
    <div className="homepage">
      <div className="directory-menu">
        {menuItems.map(({id, ...otherProps}) =>
          <MenuItem key={id} {...otherProps}/>)}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  menuItems: selectDirectoryMenuItems
})

export default connect(mapStateToProps)(Homepage);