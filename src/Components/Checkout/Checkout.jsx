import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "../CheckoutItem/CheckoutItem";
import StripeCheckoutButton from "../StripeCheckoutButton/StripeCheckoutButton";

import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total, Payment, TestWarning} from "./Checkout.styles";

function Checkout({cartItems, total}) {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      { cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) }
      <Total>Total: ${total}</Total>
      <Payment>
        <TestWarning>
          *Please use the following test credit card for payments* <br/>
          4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </TestWarning>
        <StripeCheckoutButton price={total} />
      </Payment>
    </CheckoutPageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);