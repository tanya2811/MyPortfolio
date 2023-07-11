import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xq1z9bg', 'template_hyi6yz7', form.current, 'IqNciMl2wpmK0Usws')

     e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container count">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tanyachopra28293@gmail.com</h5>
            <a href="mailto: tanyachopra28293@gmail.com">Send a message</a>
          </article>
          <article className="contact__option" >
            <BsLinkedin className="contact__option-icon"/>
            <h4>Linked In</h4>
            <h5>Tanya Chopra</h5>
            <a href="https://www.linkedin.com/in/tanya-chopra-6127a5205" target='blank'>Send a message</a>
          </article>
        </div>
        {/* CREATING CONTACT FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact