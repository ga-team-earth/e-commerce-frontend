import React from 'react'
import "./CartDropdown.scss"
import {motion} from "framer-motion";
import { cartAnim } from '../../Animation';
import { useEffect, useState } from 'react'
import axios from 'axios';

const CartDropdown = () => {

  const[cartItems, setCartItems] = useState([])
  const[cartTotal, setCartTotal] = useState([])

  useEffect(() => {
    // axios.get('https://e-commerce-earth.herokuapp.com/cart')
    axios.get('http://localhost:8000/cart')
      .then(res => {
        let data = res.data
        setCartItems(data)
        return data
      })
      .then(res => {
        let sum=0
        let cartStuff = res.data
        console.log(cartStuff)
      })
      }, [])

  const handleClick = function(event) {
    axios.delete('http://localhost:8000/cart')
    window.location.reload(false);
  }



  return (

    <motion.div exit="exit" variants={cartAnim} initial="hidden" animate="show" className='cart-dropdown-container'>
      <div className='checkout-items'>
      {cartItems.map((cartItem, index) => (
        <p key={index}>{cartItem.items[0].name}, USD {cartItem.items[0].price}</p>
        ))}
      </div>
        <button className='checkout-button' onClick={handleClick}>Checkout</button>
    </motion.div>

  )
}



export default CartDropdown