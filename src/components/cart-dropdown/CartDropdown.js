import React from 'react'
import "./CartDropdown.scss"
import {motion} from "framer-motion";
import { cartAnim } from '../../Animation';
import { useEffect, useState } from 'react'
import axios from 'axios';

const CartDropdown = () => {

  const[cartItems, setCartItems] = useState([])
  const[cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    // axios.get('https://e-commerce-earth.herokuapp.com/cart')
    axios.get('http://localhost:8000/cart')
      .then(res => {
        let data = res.data
        setCartItems(data)
        return data
      })
      .then((data) => {
        let cartArray = []
        for (let i=0; i < data.length; i+=1) {
          let price=data[i].items[0].price
          cartArray.push(price) 
          let newSum = cartArray.reduce((a,b)=>a+b)
          setCartTotal(newSum)
        }
      })
      }, [])

  const handleClick = function(event) {
    axios.delete('http://localhost:8000/cart')
    window.location.reload(false);
  }

  return (
<>
    <motion.div exit="exit" variants={cartAnim} initial="hidden" animate="show" className='cart-dropdown-container'>
      <div className='checkout-items'>
      {cartItems.map((cartItem, index) => (
        <p key={index}>{cartItem.items[0].name}, USD {cartItem.items[0].price}</p>
        ))}
      </div>
      <p>{cartTotal}</p>
        <button className='checkout-button' onClick={handleClick}>Checkout</button>
    </motion.div>
    </>

  )
}



export default CartDropdown