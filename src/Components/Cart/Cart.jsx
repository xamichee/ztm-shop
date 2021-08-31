import React from 'react';
import Button from '../Button/Button';
import './Cart.scss';

function Cart() {
  return (
    <div className="cart">
      <div className="cart-items" />
      <Button children={'Go to checkout'}/>
    </div>
  );
}

export default Cart;