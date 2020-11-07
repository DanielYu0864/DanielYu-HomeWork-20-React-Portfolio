import React from 'react'
import Media from '../../Components/Media';
import './style.css'

function Intro() {
  return (
    <div className='intro'>
      <div className='hp'>
        <h1>
          I am Daniel A. Yu
        </h1>
        <p>
          a lifelong learner of knowledge and current Boot Camp student who presently has sight set on a fullstacck-developer position.
        </p>
      </div>

      <Media/>
    </div>
  )
}

export default Intro
