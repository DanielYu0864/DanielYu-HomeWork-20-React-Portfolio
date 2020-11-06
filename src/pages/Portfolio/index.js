import React, { useState } from 'react'
import ProjectSreenshot from '../../Components/ProjectScreenhot';
import project from './projectArray';
import sk8tool from'./img/sk8tool.jpg';
import EMS from './img/EMS.png'

function Portfolio() {

  return (
    <div>
      Portfolio
      {
        project.map(e => {
          return (
            <ul className={e.name}>
              <li>Name: {e.name}</li>
              <ProjectSreenshot value={e.image}/>
              <li>Descripsion: {e.descripsion}</li>
              <li>Language: {e.language}</li>
            </ul>
          )
        })
      }

    </div>
  )
}

export default Portfolio
