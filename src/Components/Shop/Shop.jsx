import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../CollectionsOverview/CollectionsOverviewContainer";
import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import './Shop.scss'

function Shop({match, fetchCollectionsStart}) {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
    </div>
  );
}

const mapDispatchToProps = {fetchCollectionsStart};

export default connect(null, mapDispatchToProps)(Shop);