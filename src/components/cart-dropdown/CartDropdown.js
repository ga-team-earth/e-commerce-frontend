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
    axios.get('https://e-commerce-earth.herokuapp.com/cart')
    // axios.get('http://localhost:8000/cart')
      .then(res => {
        let data = res.data
        setCartItems(data)
        return data
      })
      .then((data) => {
        let cartArray = []
        for (let i=0; i < data.length; i+=1) {
          let price=data[i].items.price
          cartArray.push(price) 
          let newSum = cartArray.reduce((a,b)=>a+b)
          setCartTotal(newSum)
        }
      })
      }, [cartItems])

  const handleClick = function(event) {
    axios.delete('https://e-commerce-earth.herokuapp.com/cart')
    // axios.delete('http://localhost:8000/cart')
    window.location.reload(false);
  }

  const quantityClick = function(event) {
    let itemQuantity = {"items.quantity":parseInt(event.target.getAttribute('quantity')) + 1}
    let itemId = event.target.getAttribute('id')
    axios.patch(`https://e-commerce-earth.herokuapp.com/cart/${itemId}`, itemQuantity)
    // axios.patch(`http://localhost:8000/cart/${itemId}`, itemQuantity)
  }

  return (
<>
    <motion.div exit="exit" variants={cartAnim} initial="hidden" animate="show" className='cart-dropdown-container'>
      <div className='checkout-items'>
      {cartItems.map((cartItem, index) => (
        <>
        <div key={index}>
        <p onClick={quantityClick}
          quantity={cartItem.items.quantity}
          id={cartItem._id}
        >{cartItem.items.name}, USD {cartItem.items.price}, Quantity: {cartItem.items.quantity}</p>
        <img src={cartItem.items.imageUrl} alt='test'></img>
        </div>
        </>
        ))}
        
      </div>
      <p>Cart Total: USD {cartTotal}</p>
      <button className='checkout-button' onClick={handleClick}>Checkout</button>
    </motion.div>
    </>

  )
}



export default CartDropdown