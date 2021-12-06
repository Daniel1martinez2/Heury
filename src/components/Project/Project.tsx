import React, {useState} from 'react'; 
import Header from '../Header/Header'; 
import HeuristicChunk from '../../HeuristicChunk/HeuristicChunk'; 
import { Route} from 'react-router-dom';
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
  return(
    <div className={styles['app']}>
      <Route path="/project/:projectId">
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
        <HomePage/>
      </Route>
    </div>
  ); 
}

export default Project; 