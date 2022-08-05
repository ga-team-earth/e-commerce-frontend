import React, { useEffect, useState, useRef } from 'react'
import "./Third.scss"
import {motion} from "framer-motion";

const Third = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
  return (

    <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
      <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel">
        <div className='item'>
          <img src="https://images.unsplash.com/photo-1584285418504-010afe0e2676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1716&q=80" alt="art"/>
          <img src="https://images.unsplash.com/photo-1579541671172-43429ce17aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80" alt="art"/>
          <img src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1663&q=80" alt="art"/>
          <img src="https://images.unsplash.com/photo-1579541637431-4e3cd6f6c9e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80" alt="art"/>
          <img src="https://images.unsplash.com/photo-1576769781887-e4686a02d1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1725&q=80" alt="art"/>
          <img src="https://images.unsplash.com/photo-1577083287809-1c229a750bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80" alt="art"/>
        </div>
        </motion.div>
      </motion.div>
  )
}

export default Third