import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>TANYA</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exp">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#achive">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
       
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com"  target= 'blank'> <BsLinkedin/></a>
        <a href="https://instagram.com"  target= 'blank'><BsInstagram/> </a>
        <a href="https://gmail.com"  target= 'blank'><AiOutlineMail/> </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; Tanya . All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer