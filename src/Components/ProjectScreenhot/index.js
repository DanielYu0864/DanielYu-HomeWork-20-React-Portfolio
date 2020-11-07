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
        return <img src={sk8tool}/>;
      case './img/EMS.png':
        return <img src={EMS}/>;
      case './img/SkateFinder.png':
        return <img src={SkateFinder}/>;
      case './img/GoodReadmeGenerator.gif':
        return <img src={ReadeGenerator}/>;
      case './img/UserDirectory.png':
        return <img src={UserDirectory}/>;
      case './img/WeatherDashboard.png':
        return <img src={WeatherDashboard}/>;

    }
  }
  return (
    renderImg(value)
  )
}

export default ProjectSreenshot
