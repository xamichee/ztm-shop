import React from 'react';
import { connect } from "react-redux";
import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";

import {CheckoutItemContainer, CheckoutItemImage, RemoveButton, ItemName, ItemPrice, ItemQuantity} from "./CheckoutItem.styles";

function CheckoutItem({ clearItem, cartItem, addItem, removeItem }) {
  const {imageUrl, name, price, quantity} = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImage>
        <img src={imageUrl} alt="item" />
      </CheckoutItemImage>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </ItemQuantity>
      <ItemPrice>{price}</ItemPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);