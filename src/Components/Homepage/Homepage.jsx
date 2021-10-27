import React from 'react';
import MenuItem from "../MenuItem/MenuItem";
import {connect} from "react-redux";
import { createStructuredSelector} from "reselect";
import { selectDirectoryMenuItems } from "../../redux/directory/directory.selector";

import { HomepageContainer, DirectoryContainer } from "./Homepage.styles";

function Homepage({ menuItems }) {
  return (
    <HomepageContainer>
      <DirectoryContainer>
        {menuItems.map(({id, ...otherProps}) =>
          <MenuItem key={id} {...otherProps}/>)}
      </DirectoryContainer>
    </HomepageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  menuItems: selectDirectoryMenuItems
})

export default connect(mapStateToProps)(Homepage);