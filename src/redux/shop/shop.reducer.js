import goods from './goods';

const INITIAL = {
  collections: goods
}

const shopReducer = (state = INITIAL, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer;