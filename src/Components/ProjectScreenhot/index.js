import React from 'react'
import sk8tool from'./img/sk8tool.jpg';
import EMS from './img/EMS.png'
function ProjectSreenshot({value}) {
  const renderImg = (img) => {
    switch (img) {
      case './img/sk8tool.jpg':
        return <img src={sk8tool}/>
      case './img/EMS.png':
        return <img src={EMS}/>
    }
  }
  return (
    renderImg(value)
  )
}

export default ProjectSreenshot
