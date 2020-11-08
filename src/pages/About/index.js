import React from 'react'
import Footer from '../../Components/Footer';
import AboutMe from '../../Components/AboutMe'
import MyPicture from '../../Components/MyPicture';
import './style.css'
function About() {
  return (
    <div className='about'>
      <div>
      <MyPicture/>
      <AboutMe/>
      <Footer value='About'/>
      </div>
    </div>
  )
}

export default About
