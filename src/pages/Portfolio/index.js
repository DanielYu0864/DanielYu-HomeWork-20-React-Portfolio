import React, { useState } from 'react'
import ProjectSreenshot from '../../Components/ProjectScreenhot';
import project from './projectArray';
import './style.css'

function Portfolio() {
  console.log(project);
  return (
    <div>
      <div className='project'>
        <h2>Project</h2>
      {
        project[0].Project.map(e => {
          return (
            <ul className={e.name}>
              <li className='name'>{e.name}</li>
              <a href={e.url}><ProjectSreenshot value={e.image}/></a>
              <li className='descripsion'>{e.descripsion}</li>
              <li>Language: {e.language}</li>
            </ul>
          )
        })
      }
      </div>
      <div className='backend'>
        <h2>Backend</h2>
      {
        project[1].Backend.map(e => {
          return (
            <ul className={e.name}>
              <li className='name'>{e.name}</li>
              <a href={e.url}><ProjectSreenshot value={e.image}/></a>
              <li className='descripsion'>{e.descripsion}</li>
              <li>Language: {e.language}</li>
            </ul>
          )
        })
      }
      </div>
      <div className='frontend'>
        <h2>Frontend</h2>
      {
        project[2].Frontend.map(e => {
          return (
            <ul className={e.name}>
              <li className='name'>{e.name}</li>
              <a href={e.url}><ProjectSreenshot value={e.image}/></a>
              <li className='descripsion'>{e.descripsion}</li>
              <li>Language: {e.language}</li>
            </ul>
          )
        })
      }
      </div>


    </div>
  )
}

export default Portfolio
