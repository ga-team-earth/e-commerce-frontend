import React from 'react'
import "./Fourth.scss"
import {motion} from "framer-motion";
import { useScroll } from "../useScroll";
import { fade } from "../../Animation";
import {AiOutlineStar} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"

const Fourth = () => {

  const [element, controls] = useScroll();
  
  return (

    <motion.div variants={fade} animate={controls} initial="hidden" ref={element} className='reviews-container'>
        <div className='review'>
            <div className='image-stars'>
              <img className='small-image' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' alt='guy' />
              <div className='stars'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
            <h5 className='customerName'>Alex Williams - Fairfax, VA</h5>
            <p className='review-bio'>I placed an order and only received one of my pieces. One piece was several weeks late arriving and they never sent an email updating me on the second shipment. Other than that, the website was very easy to use and the artwork came very secure and looked great!!</p>
        </div>

        <div className='review'>
          <div className='image-stars'>
            <img className='small-image' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80' alt='boy' />
            <div className='stars'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
            <h5 className='customerName'>Dan Smith - Bronx, NY</h5>
            <p className='review-bio'>It's huge - 48 x 36" and looks fabulous over my sofa. It arrived very quickly and was packed well and delivered in perfect shape. (Purchased 10/19, received 10/24) I had looked at literally THOUSANDS of pictures on line when a friend suggested 'The Blank Canvas'</p>
        </div>

        <div className='review'>
           <div className='image-stars'>
           <img className='small-image' src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80' alt='girl' />
              <div className='stars'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
          </div>
            <h5 className='customerName'> Anna Leyton - Oakland, CA</h5>
            <p className='review-bio'>I love this company! I've ordered artwork from them before and have always been pleased with their workmanship, service, delivery, and quick response to questions or concerns!</p>
        </div>
    </motion.div>

  )
}

export default Fourth