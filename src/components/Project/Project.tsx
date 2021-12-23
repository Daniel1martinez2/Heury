import React, {useState, useContext} from 'react'; 
import ProjectContext from '../../store/project-context'; 
import Header from '../Header/Header'; 
import HeuristicChunk from '../../HeuristicChunk/HeuristicChunk'; 
import { Redirect, Route} from 'react-router-dom';
import styles from './Project.module.css'; 
import SignUp from '../Auth/Auth';
import HomePage from  '../../pages/Home-page'; 
import { VisualizationType } from '../../library/common/types';
// import Rive from 'rive-react'; 
//I had force this, because the library Rive is kinda new
// @ts-ignore
// import anima from '../animations/anima.riv'; 
  
const Project = () => { 
  const [visualizationMode, setVisualizationMode] = useState<VisualizationType>('table');
  const ctx = useContext(ProjectContext); 
  const {isLoggedIn} = ctx; 
  
  return(
    <div className={styles['app']}>
      <Route path="/project/:projectId">
        {!isLoggedIn && <Redirect to="/session"/>}
        <Header 
          visualizationMode={visualizationMode} 
          type="project" 
          setVisualizationMode={setVisualizationMode}
        />
        <HeuristicChunk mode={visualizationMode}/>
      </Route>
      <Route path="/session">
        <div className={styles['register-container']}>  
          <SignUp/>
        </div>
      </Route>
      <Route path="/" exact>
        {!isLoggedIn && <Redirect to="/session"/>}
        <HomePage/>
      </Route>
    </div>
  ); 
}

export default Project; 