import React from 'react';

import {CartItemContainer, ItemDetailsContainer, CartItemName, CartItemImg} from "./CartItem.styles";

function CartItem({ item: { imageUrl, price, name, quantity} }) {
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt="item"/>
      <ItemDetailsContainer>
        <CartItemName>{name}</CartItemName>
        <span className="price">{quantity} x ${price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartItem;