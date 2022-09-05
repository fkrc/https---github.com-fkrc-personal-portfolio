import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>25+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>   
          </div>
          <p>
          I have been involved in software development for about 4 years. 
          Initially, I started developing games with Unity and C#. After 1 year,
           my interests changed and I started developing Frontend.
            When I first started web development, I started to earn small income with the Wordpress pages 
            I made as a freelance, and then I settled into my first full-time job using Opencart and Woocommerce. 
            Here I developed myself and gained experience with SEO, SQL, JavaScript and React. 
            I am as self taught person, got to this point by working and learning on my own without any help from anyone.
             From now on, my only desire is to climb the career ladder even faster with the experience I have gained.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About