import React from 'react'
import sk8tool from'./img/sk8tool.jpg';
import EMS from './img/EMS.png';
import SkateFinder from './img/SkateFinder.png';
import ReadeGenerator from './img/GoodReadmeGenerator.gif';
import UserDirectory from './img/UserDirectory.png';
import WeatherDashboard from './img/WeatherDashboard.png';
function ProjectSreenshot({value}) {
  const renderImg = (img) => {
    switch (img) {
      case './img/sk8tool.jpg':
        return <img className='col-10' src={sk8tool}/>;
      case './img/EMS.png':
        return <img className='col-10' src={EMS}/>;
      case './img/SkateFinder.png':
        return <img className='col-10' src={SkateFinder}/>;
      case './img/GoodReadmeGenerator.gif':
        return <img className='col-10' src={ReadeGenerator}/>;
      case './img/UserDirectory.png':
        return <img className='col-10' src={UserDirectory}/>;
      case './img/WeatherDashboard.png':
        return <img className='col-10' src={WeatherDashboard}/>;

    }
  }
  return (
    renderImg(value)
  )
}

export default ProjectSreenshot
