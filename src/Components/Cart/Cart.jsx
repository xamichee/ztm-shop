import React from 'react';
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-router-dom';

import CartItem from "../CartItem/CartItem";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {CartContainer, CartItemsContainer, CartButton, EmptyMessage} from "./Cart.styles";

function Cart({cartItems, history, dispatch }) {
  return (
    <CartContainer>
      <CartItemsContainer>
        {
          cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
              : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
      </CartItemsContainer>
      <CartButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }} children={'Go to checkout'}/>
    </CartContainer>
  );
}

const mapStateToProps = createStructuredSelector ({ cartItems: selectCartItems });

export default withRouter(connect(mapStateToProps)(Cart));