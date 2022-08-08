import React, { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';
import "./Navigation.scss";
import { useContext } from 'react';
import {CartContext} from "../../contexts/CartContext"
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from '../../components/cart-dropdown/CartDropdown';

const Navigation = () => {

  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <div className='nav-container'>
          <Link className='logo' to="/">
            The Blank Canvas
          </Link>
          <div className='nav-links'>
            <Link className='link' to="/About">
              About
            </Link>
            <Link className='link' to="/Contact">
              Contact
            </Link>
            <Link className='link' to="/Shop">
              Shop
            </Link>
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation