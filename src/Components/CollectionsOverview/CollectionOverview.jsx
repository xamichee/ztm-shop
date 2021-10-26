import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import PreviewShop from "../PreviewShop/PreviewShop";
import { selectCollections } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => {
  return (
    <div className="collections-overview">
      {
        collections.map(({id, ...props}) => (
            <PreviewShop key={id} {...props} />
          )
        )
      }
    </div>
  );
};
const mapStateToProps = createStructuredSelector({collections: selectCollections});

export default connect(mapStateToProps)(CollectionsOverview);
