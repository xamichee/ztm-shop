import React from 'react';
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";
import Button from "../Button/Button";

import './ShopItem.scss'

function ShopItem({item, addItem}) {
  const {name, imageUrl, price} = item;

  return (
    <div className="shopItem">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }
        }/>
      <div className="shopItem_footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted children={'add to cart'} onClick={() => addItem(item)}/>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ShopItem);