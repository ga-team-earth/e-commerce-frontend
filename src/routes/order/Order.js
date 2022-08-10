import "./Order.scss"
import { motion } from "framer-motion"
import {pageAnimation} from "../../Animation"
import axios from 'axios'
import { useEffect, useState } from 'react'

const Order = () => {

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

const checkoutClick = function(event) {
    axios.delete('https://e-commerce-earth.herokuapp.com/cart')
    setCartTotal(0)

}

const removeClick = function(event) {
    let itemId = event.target.getAttribute('id')
    axios.delete(`https://e-commerce-earth.herokuapp.com/cart/${itemId}`)
  }

return (

    <div className='order'>
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='checkout-container'>
            <div className='checkout-header'> 
                <div className='header-block'>
                    <span>Product</span>
                    {cartItems.map((cartItem, index) => (
                        <ul>
                            <img src={cartItem.items.imageUrl} alt="art"></img>
                        </ul>
                    ))}

                </div>
                <div className='header-block'>
                    <span>Name</span>
                    {cartItems.map((cartItem, index) => (
                        <ul>{cartItem.items.name}</ul>
                    ))}

                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                    {cartItems.map((cartItem, index) => (
                        <ul>{cartItem.items.quantity}</ul>
                    ))}
                </div>
                <div className='header-block'>
                    <span>Price</span>
                    {cartItems.map((cartItem, index) => (
                        <ul>{cartItem.items.price}</ul>
                    ))}
                </div>
                <div className='header-block'>
                    <span>Remove?</span>
                    {cartItems.map((cartItem, index) => (
                        <button onClick={removeClick} id={cartItem._id}>Click to Remove</button>
                    ))}
                </div>
            </div>
            <p>{cartTotal}</p>
            <button onClick={checkoutClick}>Checkout</button>
        </motion.div>
    </div>

  )
}

export default Order