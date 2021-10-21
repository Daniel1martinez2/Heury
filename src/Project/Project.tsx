import Header from '../Header/Header'; 
import HeuristicChunk from '../HeuristicChunk/HeuristicChunk'; 
import { Route, Link } from 'react-router-dom';
import styles from './Project.module.css'; 

const Project = () => {
  return(
    <div className={styles['app']}>
    <Route path="/project/:projectId">
      <Header type="project"/>
      <HeuristicChunk/>
    </Route>
    <Route path="/" exact>
      <Header type="home"/>
      <Link to="/project/alooooo/table">EFE</Link>
    </Route>
    </div>
  ); 
}

export default Project; 