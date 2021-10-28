import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount} from "../../redux/cart/cart.selectors";

import {CartIconContainer, ShoppingIcon, ItemCount} from "./CartIcon.styles";

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
}

const mapDispatchToProps = ({toggleCartHidden});

const mapStateToProps = createStructuredSelector({ itemCount: selectCartItemsCount });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);