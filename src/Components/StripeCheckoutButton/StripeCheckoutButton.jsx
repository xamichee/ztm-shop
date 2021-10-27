import React from 'react';
import StripeCheckout from "react-stripe-checkout";

import icon from '../../Assets/crown.svg';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Jp78MGNYGgwt8wbt7XQAM6iM2TrzQ1xJFTBvCcqhZpCgP41L5wBhnQ8SzTZ1uimoSZTarDFRHg4ZDzI1tdsna9c00eyYLNVH9';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
    label = 'Pay Now'
    name = 'ZTM Shop'
    billingAddress
    shippingAddress
    image = {icon}
    description = {`Your total is $${price}`}
    amount = {priceForStripe}
    panelLabel = 'Pay Now'
    token = {onToken}
    stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
