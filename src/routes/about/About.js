import React, { Fragment } from 'react'
import "./About.scss"
import {motion} from "framer-motion";
import {pageAnimation} from "../../Animation";

const about = () => {

  return (
  <Fragment>
    <div className='about-container'>
      <div className='image-container'>
        <motion.img exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='couple' src="https://images.unsplash.com/flagged/photo-1577474810448-82eb81a48d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80" alt='couple' />
      </div>
      <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='text-container'>
        <div className='top-heading'>
          <h2>Francisco & Anette Diopani</h2>
        </div>
        <div className='story'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, soluta possimus voluptas voluptatem minus, excepturi tenetur amet iusto sapiente culpa modi sed distinctio delectus? Tenetur corrupti ullam consequatur. Veritatis, repudiandae?
          Omnis aperiam nostrum natus animi corrupti placeat sint iusto reiciendis voluptate, consequuntur nesciunt esse nihil, quae dolor veniam aut earum nemo cumque recusandae temporibus reprehenderit libero? Alias architecto minima facere!
          Consequatur laborum eaque voluptates maiores iusto sint, est similique neque quo quas quod dolores consectetur tempora facere iste esse dolorem! Provident expedita ad fugiat reprehenderit velit voluptas, vero odit explicabo!
          Consequatur laborum eaque voluptates maiores iusto sint, est similique neque quo quas quod dolores consectetur tempora facere iste esse dolorem! Provident expedita ad fugiat reprehenderit velit voluptas, vero odit explicabo!
          </p>
        </div>
      </motion.div>
    </div>
  </Fragment>
  )
}

export default about