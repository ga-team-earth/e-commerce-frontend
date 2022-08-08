import React from 'react'
import "./Shop.scss"
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {motion} from "framer-motion";
import { titleAnim } from '../../Animation';
import {pageAnimation} from "../../Animation";

const TitleFive = () => {

  const [artItems, setArtItems] = useState([])
  const [titleState, setTitleState] = useState([])
  const [widthTwo, setWidthTwo] = useState(0);
  const carouselTwo = useRef();

  useEffect(() => {
    setWidthTwo(1270)
  }, [])

  useEffect(() => {
    axios.get('https://e-commerce-earth.herokuapp.com/api/art')
      .then(res => {
        let data = res.data
        let titleFive = data[4]
        setArtItems(titleFive.items)
        setTitleState(titleFive)
      })
  }, [])

  return (
    <>
        <motion.h1 exit="exit" variants={titleAnim} initial="hidden" animate="show" className='title'>{titleState.title}</motion.h1>
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" ref={carouselTwo}  whileTap={{cursor: "grabbing"}} className='box'>
        <motion.div drag="x" dragConstraints={{right: 0, left: -widthTwo}} className="inner-carousel-two">
        <div className='item-two'>
        {artItems.map((artItem, index) => (
        <motion.div whileHover={{scale: .9}} className='product-card-container'>
            <img src={artItem.imageUrl} alt="flowers" />
            <div className='footer'>
              <span className='name' key={index}>{artItem.name}</span>
              <span className='price'>${artItem.price}</span>
              <button>Add to Cart</button>
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

export default TitleFive