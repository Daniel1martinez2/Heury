import React from 'react'; 
import Header from '../Header/Header'; 
import HeuristicChunk from '../../HeuristicChunk/HeuristicChunk'; 
import { Route } from 'react-router-dom';
import styles from './Project.module.css'; 
import ProjectThumb from '../ProjectThumb/ProjectThumb';
import SignUp from '../Auth/Auth';
import Rive from 'rive-react'; 
//I had force this, because the library Rive is kinda new
// @ts-ignore
import anima from '../animations/anima.riv'; 

const Project = () => {
  return(
    <div className={styles['app']}>
      <Route path="/project/:projectId">
        <Header type="project"/>
        <HeuristicChunk/>
      </Route>
      <Route path="/session">
        <div className={styles['register-container']}>  
          {/* <Rive className={styles['rive-animation']} src={anima}/> */}
          <SignUp/>
        </div>
      </Route>
      <Route path="/" exact>
        <Header type="home"/>
        <div className={styles['projects-container']}>
          <div className={styles['projects-title']}>
            <h1>All Reports</h1>
            <span>( 7 )</span>
          </div>
          <div className={styles['thumb-container']}>
            <ProjectThumb/>
            <ProjectThumb/>
            <ProjectThumb/>
            <ProjectThumb/>
            <ProjectThumb/>
            <ProjectThumb/>
            <ProjectThumb/>
          </div>
        </div>
      </Route>
    </div>
  ); 
}

export default Project; 