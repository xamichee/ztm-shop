import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import {connect} from "react-redux";

import { firestore, convertCollectionsSnapshotToMap } from "../../Firebase/firebase.utils";
import CollectionsOverview from "../CollectionsOverview/CollectionOverview";
import CollectionPage from "../CollectionPage/CollectionPage";

import { updateCollections } from "../../redux/shop/shop.actions";

import './Shop.scss'

function Shop({match, updateCollections}) {

  useEffect(() => {
    let unsubscribeFromSnapshot = null;

    const collectionRef = firestore.collection('collections');

    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    })

  }, [])

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  );
}

const mapDispatchToProps = {updateCollections};

export default connect(null ,mapDispatchToProps)(Shop);