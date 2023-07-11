import React from 'react'
import './Achievement.css'
import c1 from '../../assets/c1.jpeg'
import c2 from '../../assets/c2.jpeg'
import c3 from '../../assets/c3.jpeg'
import c4 from '../../assets/c4.jpeg'
import c5 from '../../assets/c5.jpeg'

//IMPORT SWIPER CORE AND REQUIRED MODULES
import { Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

//IMPORT SWIPER STYLES
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    avatar: c5,
    name: 'Introduction to Web Technologies',
    review: 'I got this Intro to web certificate in my first year when i was a beginner and was working with html, css, bootstrap and css frameworks. Coding Ninjas made things easier to learn for me'
  },
  {
    avatar: c2,
    name: 'JavaScript Essentials',
    review: 'This certificate is for implementing and learning basic level javascript. Its a beautiful language and i made many projects and small games using javaScript just like flappy bird, dino game, ludo etc'
  },
  {
    avatar: c3,
    name: 'Python',
    review: 'My first language which i worked with was Python. It was little tough to understand it in the beginning but later i found it easier and solved my basic programming questions with it. '
  },
  {
    avatar: c4,
    name: 'Web Development',
    review: 'In this course i learnt advanced javascript, JQuery, Ajax basics of React and made a music player application from scratch.'
  },
  {
    avatar: c1,
    name: 'Cyber Stalking',
    review: 'Cyberstalking is a type of cybercrime that uses the internet and technology to stalk a person. It can be considered an extension of cyberbullying and in-person stalking.'
  },
]


const Achievement = () => {
  return (
    <section className="achive" id='achive'>
      <h5>Some Of my</h5>
      <h2>Achievements</h2>



      <Swiper className="container achive__container"

        //INSTALL SWIPER MODULE
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable: true}}>

        {
          data.map(({avatar, name, review}, index) => {
            return (
        <SwiperSlide key={index} className="a">
          <div className="certificate" >
                     <img src={avatar} alt="" />
          </div>
            <h5>{name}</h5>
            <small className="summary">
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
        

      </Swiper>
    </section>
  )
}

export default Achievement