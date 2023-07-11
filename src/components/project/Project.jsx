import React, { useState } from 'react'
import './project.css'
import {AiOutlineClose} from 'react-icons/ai'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import p1 from '../../assets/p1.jpeg'
import p2 from '../../assets/p2.jpeg'
import p3 from '../../assets/p3.jpeg'
import p4 from '../../assets/p4.jpeg'
import p5 from '../../assets/p5.jpeg'
import p6 from '../../assets/p6.jpeg'
const Project = () => {
     const [toggleState, setToggleState] = useState(0);
     const toggleTab = (index) => {
          setToggleState(index);
     }
  return (
        <section id="portfolio">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>

        <div className="container p">
         <article className="portfolio__item">
          <div className="portfolio__item-image">
               <img src={p2} alt="" />
          </div>
            <h5>SPACE X CLONE</h5>
            <span className='services__button'>
            <a  className='btn' onClick ={() => toggleTab(1)}  >Read More</a>
            </span>
            <div className={toggleState === 1 ? "services__modal active-modal" :"services__modal"}>
               <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"><AiOutlineClose/></i>
                   <h3 className="services__modal-title">SPACEX CLONE</h3>
                   <p className="services__modal-desc">
                    <div className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>I made this using html, css, Js</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>I redesigned this spacex using <br></br>animation and hover effects</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>This 3-D effect is amazing </div>

                   </p>
               </div>
            </div>
         </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
               <img src={p3} alt="" />
          </div>
            <h5>MOVIES STREAMING APPLICATION</h5>
            <span className='services__button'>
            <a  className='btn' onClick ={() => toggleTab(2)}  >Read More</a>
            </span>
            <div className={toggleState === 2 ? "services__modal active-modal" :"services__modal"}>
               <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"><AiOutlineClose/></i>
                   <h3 className="services__modal-title">MOVIES STREAMING APPLICATION</h3>
                   <p className="services__modal-desc">
                    <div className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Made this using html, css, JS.</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Has amazing Dark and Light Theme. </div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>This website is totally <br></br>responsive.</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Has amazing color combination <br /> and slider effects.</div>

                   </p>
               </div>
            </div>
         </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
               <img src={p4} alt="" />
          </div>
            <h5>FOOD DELEVIERY WEBSITE</h5>
            <span className='services__button'>
            <a  className='btn' onClick ={() => toggleTab(3)}  >Read More</a>
            </span>
            <div className={toggleState === 3 ? "services__modal active-modal" :"services__modal"}>
               <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"><AiOutlineClose/></i>
                   <h3 className="services__modal-title">FOOD DELIVERY WEBSITE</h3>
                   <p className="services__modal-desc">
                    <div className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>I made this using html, css, Js</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>It is a working website with<br></br>Login/SignIn form</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Amazing drop UI/UX ,looking <br /> forward to add payment gateway. </div>

                   </p>
               </div>
            </div>
         </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
               <img src={p5} alt="" />
          </div>
            <h5>HAIR SALON WEBSITE</h5>
            <span className='services__button'>
            <a  className='btn' onClick ={() => toggleTab(4)}  >Read More</a>
            </span>
            <div className={toggleState === 4 ? "services__modal active-modal" :"services__modal"}>
               <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"><AiOutlineClose/></i>
                   <h3 className="services__modal-title">HAIR SALON WEBSITE</h3>
                   <p className="services__modal-desc">
                    <div className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Amazing color contrast with transition effects</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Smooth scrolling and hover effects</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Learned a lot whille making it</div>

                   </p>
               </div>
            </div>
         </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
               <img src={p1} alt="" />
          </div>
            <h5>TO DO LIST </h5>
            <span className='services__button'>
            <a  className='btn' onClick ={() => toggleTab(5)}  >Read More</a>
            </span>
            <div className={toggleState === 5 ? "services__modal active-modal" :"services__modal"}>
               <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"><AiOutlineClose/></i>
                   <h3 className="services__modal-title">TO-DO LIST</h3>
                   <p className="services__modal-desc">
                    <div className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Made fully functional list to add, delete and edit your tasks</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Used React JS, Node JS, Php , My sql</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Looking foward to add login <br /> page for users convinience </div>

                   </p>
               </div>
            </div>
         </article>
         <article className="portfolio__item">
          <div className="portfolio__item-image">
               <img src={p6} alt="" />
          </div>
            <h5>DINO GAME</h5>
            <span className='services__button'>
            <a  className='btn' onClick ={() => toggleTab(6)}  >Read More</a>
            </span>
            <div className={toggleState === 6 ? "services__modal active-modal" :"services__modal"}>
               <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"><AiOutlineClose/></i>
                   <h3 className="services__modal-title">DINO GAME</h3>
                   <p className="services__modal-desc">
                    <div className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Amazing Javascriptt Project</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>Made a clone of Google chrome <br /> Dino game</div>
                    <div  className='project__details'><BsFillPatchCheckFill className='project__details-icon'/>The main objective of this <br /> mini-game is to score more <br /> and more without being <br /> touched by any obstacles</div>

                   </p>
               </div>
            </div>
         </article>
         
        </div>
        </section>
  )
}

export default Project