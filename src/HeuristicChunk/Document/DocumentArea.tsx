import React, {useContext} from 'react'
import DocumentView from './DocumentView'
import styles from './DocumentArea.module.css';
import ProjectContext from '../../store/project-context';

const DocumentArea = () => {
  const ctx = useContext(ProjectContext); 
  const {observationArray} = ctx; 
  return (
    <div className={styles['area']}>
      {observationArray.map((observation, index) => <DocumentView observationData={observation} index={index}/>)}
      
    </div>
  )
}

export default DocumentArea
