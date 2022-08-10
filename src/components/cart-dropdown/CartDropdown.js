import React from 'react'
import "./CartDropdown.scss"
import {motion} from "framer-motion";
import { cartAnim } from '../../Animation';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import {AiFillRightCircle} from "react-icons/ai";
import {AiFillLeftCircle} from "react-icons/ai";

const CartDropdown = () => {

  const[cartItems, setCartItems] = useState([])
  const[cartTotal, setCartTotal] = useState(0)
  const navigate = useNavigate();

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
          let price=data[i].items.price
          cartArray.push(price) 
          let newSum = cartArray.reduce((a,b)=>a+b)
          setCartTotal(newSum)
        }
      })
      }, [cartItems])

  const goToOrderHandler = () => {
    navigate('/Order')
  }

  const quantityClick = function(event) {
    let itemQuantity = {"items.quantity":parseInt(event.target.getAttribute('quantity')) + 1}
    let itemId = event.target.getAttribute('id')
    axios.patch(`http://localhost:8000/cart/${itemId}`, itemQuantity)

  }

  // console.log(cartItems.items.img)

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
      <p className='total'>Cart Total: USD {cartTotal}</p>
      <button className='checkout-button' onClick={goToOrderHandler}>Checkout</button>
    </motion.div>
    </>

  )
}



export default CartDropdown