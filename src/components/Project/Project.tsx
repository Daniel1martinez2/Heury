import React, {useContext, useState} from 'react'; 
import Header from '../Header/Header'; 
import HeuristicChunk from '../../HeuristicChunk/HeuristicChunk'; 
import { Route } from 'react-router-dom';
import styles from './Project.module.css'; 
import ProjectThumb from '../ProjectThumb/ProjectThumb';
import SignUp from '../Auth/Auth';
import ProjectContext from '../../store/project-context'; 
// import Rive from 'rive-react'; 
//I had force this, because the library Rive is kinda new
// @ts-ignore
// import anima from '../animations/anima.riv'; 
import { VisualizationType } from '../../library/common/types';


const Project = () => {
  const ctx = useContext(ProjectContext);
  const {userProjects} = ctx; 
  const [visualizationMode, setVisualizationMode] = useState<VisualizationType>('table'); 
  return(
    <div className={styles['app']}>
      <Route path="/project/:projectId">
        <Header visualizationMode={visualizationMode} type="project" setVisualizationMode={setVisualizationMode}/>
        <HeuristicChunk mode={visualizationMode}/>
      </Route>
      <Route path="/session">
        <div className={styles['register-container']}>  
          <SignUp/>
        </div>
      </Route>
      <Route path="/" exact>
        <Header type="home"/>
        <div className={styles['projects-container']}>
          <div className={styles['projects-title']}>
            <h1>All Reports</h1>
            <span>( {userProjects.length} )</span>
          </div>
          <div className={styles['thumb-container']}>
            {userProjects.map(project => <ProjectThumb data={project} key={project.id} />)}
            
          </div>
        </div>
      </Route>
    </div>
  ); 
}

export default Project; 