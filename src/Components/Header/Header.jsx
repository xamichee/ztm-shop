import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {auth} from "../../Firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo} from '../../Assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import './Header.scss'

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to='/shop'>SHOP</Link>
        <Link className="option" to='/contact'>CONTACT</Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      { hidden ? null : <Cart /> }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);
