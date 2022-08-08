import React from 'react'
import "./CartDropdown.scss"
import {motion} from "framer-motion";
import { cartAnim } from '../../Animation';

const CartDropdown = () => {

  return (

    <motion.div exit="exit" variants={cartAnim} initial="hidden" animate="show" className='cart-dropdown-container'>
        <button className='checkout-button'>Checkout</button>
    </motion.div>

  )
}

export default CartDropdown