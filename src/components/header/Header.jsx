import React from 'react'
import './header.css'
import Tanya from '../../assets/Tanya.avif'
// import Tanya1 from '../../assets/Tanya1.png'
import { FiSun } from 'react-icons/fi'
import  TypeWriterEffect from 'react-typewriter-effect'
const Header = () => {
  return (

    <header>
      <div className='card' style={{ backgroundImage: `linear-gradient(rgba( 0, 0, 0,0.3), rgba(0, 0, 0, 0.3)), url(${Tanya})`,}}>
    
        <div className="navbar">
          <div className="nav">
            <a href="#">Home</a>
            <a href="#about">About Me</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact Me</a>
            <a href="#"><FiSun /></a>
          </div>
        </div>

        <div className="container header__container">
          <div className="name">

          <h5>Hello I'm</h5>
          <h1> Tanya
          </h1>
          <h5 className="text-light">
          <span>
          <TypeWriterEffect
          textStyle={{color: 'rgba(255, 255, 255, 0.6)' , fontSize: '17px' }}
          startDelay={2000}
          cursorColor = 'rgba(255, 255, 255, 0.6)'
          multiText={['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 
        'UI/UX Designer']}
          cursor
          multiCursorStyle='_'
          multiTextDelay={1000}
          typespeed={30}
          multiTextLoop 
          
          />
          </span>
            </h5>

          <div className="cta">

            <a href="#about" className='btn'>About Me</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          </div>
          <div className='me'>
            {/* <img src={Tanya1} alt="me" /> */}
            
            <h1 className='you'>
              
              "YOUR ONLY LIMIT IS YOUR
            </h1>
            <h1 className='you'>

              IMAGINATION"
            </h1>
            
          </div>


        </div>


      </div>
    </header>
  )
}

export default Header