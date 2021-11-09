import React from 'react';
import { connect } from 'react-redux';
import {auth} from "../../Firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo} from '../../Assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {signOutStart } from '../../redux/user/user.actions';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionsLink} from "./Header.styles";

function Header({ currentUser, hidden, signOutStart }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionsLink to='/shop'>SHOP</OptionsLink>
        <OptionsLink to='/contact'>CONTACT</OptionsLink>
        {
          currentUser ?
            <OptionsLink as='div' onClick={signOutStart}>SIGN OUT</OptionsLink>
            :
            <OptionsLink to='/signin'>SIGN IN</OptionsLink>
        }
        {currentUser && <CartIcon/>}
      </OptionsContainer>
      {hidden ? null : <Cart /> }
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

const mapDispatchToProps = {signOutStart}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
