import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionsOverview from "../CollectionsOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import WithSpinner from "../WithSpinner/WithSpinner";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import './Shop.scss'

const WrappedWithSpinnerCollectionsOverview = WithSpinner(CollectionsOverview);
const WrappedWithSpinnerCollectionPage = WithSpinner(CollectionPage);

function Shop({match, fetchCollectionsStartAsync, isCollectionFetching}) {

  useEffect(() => {
    fetchCollectionsStartAsync()
  }, [fetchCollectionsStartAsync])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}
             render={(props) => <WrappedWithSpinnerCollectionsOverview isLoading={isCollectionFetching} {...props}/>}/>
      <Route path={`${match.path}/:collectionId`}
             render={(props) => <WrappedWithSpinnerCollectionPage isLoading={isCollectionFetching} {...props}/>}/>
    </div>
  );
}

const mapDispatchToProps = {fetchCollectionsStartAsync};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);