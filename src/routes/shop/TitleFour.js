import React from 'react'
import "./Shop.scss"
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import {motion} from "framer-motion"

const TitleFour = () => {

  const [artItems, setArtItems] = useState([])
  const [titleState, setTitleState] = useState([])
  const [widthTwo, setWidthTwo] = useState(0);
  const carouselTwo = useRef();

  useEffect(() => {
    console.log(carouselTwo.current.scrollWidth, carouselTwo.current.offsetWidth )
    setWidthTwo(carouselTwo.current.scrollWidth - carouselTwo.current.offsetWidth)
  }, [])

  useEffect(() => {
    axios.get('https://e-commerce-earth.herokuapp.com/api/art')
      .then(res => {
        let data = res.data
        let titleFour = data[3]
        setArtItems(titleFour.items)
        setTitleState(titleFour)
      })
  }, [])

  return (
    <>
    <h1 className='title'>{titleState.title}</h1>
    <motion.div ref={carouselTwo}  whileTap={{cursor: "grabbing"}} className='box'>
    <motion.div drag="x" dragConstraints={{right: 0, left: -widthTwo}} className="inner-carousel-two">
    <div className='item-two'>
    {artItems.map((artItem, index) => (
    <div className='product-card-container'>
        <img src={artItem.imageUrl} alt="flowers" />
        <div className='footer'>
          <span className='name' key={index}>{artItem.name}</span>
          <span className='price'>{artItem.price}</span>
          <button>Add to Cart</button>
        </div>
    </div>
  )
)}
</div>
</motion.div>
</motion.div>
</>
)
}
export default TitleFour
s
