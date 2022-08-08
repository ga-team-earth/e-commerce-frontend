import React, { Fragment } from 'react'
import "./Contact.scss"
import {motion} from "framer-motion";
import {pageAnimation} from "../../Animation";


const Contact = () => {
  return (
    <Fragment>
    <div className='contact-container'>
      <motion.img exit="exit" variants={pageAnimation} initial="hidden" animate="show" className="contact-pic" src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80" alt="contact-pic" />
       <motion.form exit="exit" variants={pageAnimation} initial="hidden" animate="show" action="https://formsubmit.co/200366deb449473863d8d25b74b9e314" method="POST" className="form-container">
          <h1 className="contact">Reach Out</h1>
          <input type="text" className="name" placeholder="Name" name='name'></input>
          <input type="email" className="email" placeholder="Email" name='email'></input>
          <textarea className="message" placeholder="Your Message" type="text" rows="10" name="comments, questions?"></textarea>
          <input type="text" name="_honey" style={{display: "none"}} />
          <input type="text" name="_captcha" value="false" style={{display: "none"}} />
          <button type='submit' className="send">Send</button>
        </motion.form>
    </div>
    </Fragment>

  )
}

export default Contact