import React from 'react'
import './About.css'
import Tanya2 from '../../assets/Tanya2.png'
import {FaAward} from 'react-icons/fa'
import {TbSchool} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
   <section id="about">
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={Tanya2} alt="" />
      </div>

      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>Beginner</small>
          </article>

          <article className="about__card">
            <TbSchool className='about__icon' />
            <h5>Education</h5>
            <small>Undergrad</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>Beginner</small>
          </article>
        </div>
        <p>
        Enthusiastic software engineer and budding Web Developer who is Quest to learn in a real professional and vying ambiance that enables me to cope with the emerging latest technologies and scope for widening the spectrum of my knowledge.
        </p>
        <a href="#contact" className="btn btn-primay project">Let's Talk</a>

      </div>
    </div>

   </section>
  )
}

export default About