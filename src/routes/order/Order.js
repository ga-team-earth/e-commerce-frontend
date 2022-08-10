import React from 'react'
import "./Order.scss"
import { motion } from "framer-motion"
import {pageAnimation} from "../../Animation"
import axios from 'axios'

const Order = () => {

const checkoutClick = function(event) {
    axios.delete('https://e-commerce-earth.herokuapp.com/cart')
}

  return (

    <div className='order'>
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='checkout-container'>
            <div className='checkout-header'> 
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
            </div>
        </motion.div>
    </div>

  )
}

export default Order