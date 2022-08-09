import React from 'react'
import "./Shop.scss"
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {motion} from "framer-motion"
import { titleAnim } from '../../Animation';
import {pageAnimation} from "../../Animation";

const TitleFour = () => {

  const [artItems, setArtItems] = useState([])
  const [titleState, setTitleState] = useState([])
  const [widthTwo, setWidthTwo] = useState(0);
  const carouselTwo = useRef();

  useEffect(() => {
    setWidthTwo(1270)
  }, [])

  useEffect(() => {
    axios.get('https://e-commerce-earth.herokuapp.com/art')
      .then(res => {
        let data = res.data
        let titleFour = data[3]
        setArtItems(titleFour.items)
        setTitleState(titleFour)
      })
  }, [])

  const handleClick = function(event) {
    let artName = event.target.getAttribute('name')
    let artPrice = event.target.getAttribute('price')
    let artQuantity = 1
    let newCartItem = {"items": [{
      "name": artName,
      "price": artPrice,
      "quantity": artQuantity,
    }]}
    // axios.post('https://e-commerce-earth.herokuapp.com/cart', cartItem)
    axios.post('http://localhost:8000/cart', newCartItem)
  }

  return (
    <>
    <motion.h1 exit="exit" variants={titleAnim} initial="hidden" animate="show" className='title'>{titleState.title}</motion.h1>
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" ref={carouselTwo}  whileTap={{cursor: "grabbing"}} className='box'>
    <motion.div drag="x" dragConstraints={{right: 0, left: -widthTwo}} className="inner-carousel-two">
    <div className='item-two'>
    {artItems.map((artItem, index) => (
    <motion.div whileHover={{scale: .9}} className='product-card-container' key={index}>
        <img src={artItem.imageUrl} alt="flowers" />
        <div className='footer'>
          <span className='name' key={index}>{artItem.name}</span>
          <span className='price'>${artItem.price}</span>
          <button 
                onClick={handleClick}
                name={artItem.name} 
                price={artItem.price}             
              >
                Add to Cart
              </button>
        </div>
    </motion.div>
  )
)}
</div>
</motion.div>
</motion.div>
</>
)
}
export default TitleFour
