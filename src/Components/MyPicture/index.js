import React from 'react';
import image from '../../img/IMG_20190620_093845_094.jpg';
import './style.css';

function MyPicture() {
  return (
    <div className='my-p'>
      <img  alt='' src={image}/>
    </div>
  )
}

export default MyPicture
