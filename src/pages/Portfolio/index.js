import React from 'react';
import Footer from '../../Components/Footer';
import ProjectSreenshot from '../../Components/ProjectScreenhot';
import project from './projectArray';
import './style.css'

function Portfolio() {
  console.log(project);
  return (
    <div className='portfolio-div'>
      <div className='project col-5'>
        <h2>Project</h2>
      {
        project[0].Project.map(e => {
          return (
            <ul key={e.name} className={e.name + 'col-8'}>
              <li className='name'>{e.name}</li>
              <a href={e.url}><ProjectSreenshot value={e.image}/></a>
              <li className='descripsion'>{e.descripsion}</li>
              <li>Language: {e.language}</li>
            </ul>
          )
        })
      }
      </div>
      <div className='backend col-5'>
        <h2>Backend</h2>
      {
        project[1].Backend.map(e => {
          return (
            <ul key={e.name} className={e.name}>
              <li className='name'>{e.name}</li>
              <a href={e.url}><ProjectSreenshot value={e.image}/></a>
              <li className='descripsion'>{e.descripsion}</li>
              <li>Language: {e.language}</li>
            </ul>
          )
        })
      }
      </div>
      <div className='frontend col-8'>
        <h2>Frontend</h2>
      {
        project[2].Frontend.map(e => {
          return (
            <ul key={e.name} className={e.name}>
              <li className='name'>{e.name}</li>
              <a href={e.url}><ProjectSreenshot value={e.image}/></a>
              <li className='descripsion'>{e.descripsion}</li>
              <li>Language: {e.language}</li>
            </ul>
          )
        })
      }
      </div>

      <Footer value='TOP'/>
    </div>
  )
}

export default Portfolio
