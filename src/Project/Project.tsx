import React from 'react'; 
import Header from '../Header/Header'; 
import HeuristicChunk from '../HeuristicChunk/HeuristicChunk'; 
import { Route } from 'react-router-dom';
import styles from './Project.module.css'; 
import ProjectThumb from './ProjectThumb';

const Project = () => {
  return(
    <div className={styles['app']}>
    <Route path="/project/:projectId">
      <Header type="project"/>
      <HeuristicChunk/>
    </Route>
    <Route path="/" exact>
      <Header type="home"/>
      <div className={styles['projects-container']}>
        <div className={styles['projects-title']}>
          <h1>All Reports</h1>
          <span>(1)</span>
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
      {/* <Link to="/project/alooooo/table">EFE</Link> */}
    </Route>
    </div>
  ); 
}

export default Project; 