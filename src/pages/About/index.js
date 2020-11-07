import React from 'react'
import AboutMe from '../../Components/AboutMe'
import MyPicture from '../../Components/MyPicture';
import './style.css'
function About() {
  return (
    <div className='about'>
      <div>
      <MyPicture/>
      <AboutMe/>
      </div>
    </div>
  )
}

export default About
