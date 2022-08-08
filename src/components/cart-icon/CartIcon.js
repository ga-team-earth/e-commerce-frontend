import React from 'react'
import "./CartIcon.scss"
import {AiOutlineShopping} from "react-icons/ai"
import { useContext } from 'react';
import {CartContext} from "../../contexts/CartContext"

const CartIcons = () => {

  const { isCartOpen, setIsCartOpen} = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <AiOutlineShopping className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcons