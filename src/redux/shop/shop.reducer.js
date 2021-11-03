import goods from './goods';

import ShopActionTypes from "./shop.types";

const INITIAL = {
  collections: goods
}

const shopReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
    }
    default:
      return state
  }
}

export default shopReducer;