import React from 'react'
import './exp.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Exp = () => {
  return (
   <section className="experience" id='exp'>
    <h5>Skills I have</h5>
    <h2>Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>

          <div>
            <h4>HTML</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>JQuery</h4>
            <small className="text-light">
              Intermediate
            </small>
          </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>JavaScript</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>Bootstrap</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>React JS</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>Tailwind CSS</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>
        </div>
      </div>

           {/* BACKEND SECTION */}

      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>Node JS</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>Mongo DB</h4>
            <small className="text-light">
              Intermediate
            </small>
          </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>Express</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            
          <div>

            <h4>MySQL</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
            <h4>Java</h4>
            <small className="text-light">
              Experienced
            </small>
          </div>
          </article>
       
        </div>

      </div>
    </div>
   </section>
  )
}

export default Exp