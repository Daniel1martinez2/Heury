import Header from '../Header/Header'; 
import HeuristicChunk from '../HeuristicChunk/HeuristicChunk'; 

import styles from './Project.module.css'; 

const Project = () => {
  return(
    <div className={styles['app']}>
      <Header/>
      <HeuristicChunk/>
    </div>
  ); 
}

export default Project; 