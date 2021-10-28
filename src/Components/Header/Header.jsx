import React from 'react';
import { connect } from 'react-redux';
import {auth} from "../../Firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo} from '../../Assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./Header.styles";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {
          currentUser ?
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
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

export default connect(mapStateToProps)(Header);
