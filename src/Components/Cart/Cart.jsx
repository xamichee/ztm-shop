import React from 'react';
import {connect} from "react-redux";

import Button from '../Button/Button';
import CartItem from "../CartItem/CartItem";
import './Cart.scss';

function Cart({cartItems}) {
  return (
    <div className="cart">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <Button children={'Go to checkout'}/>
    </div>
  );
}

const mapStateToProps = ({cart: {cartItems}}) => ({cartItems});

export default connect(mapStateToProps)(Cart);