import React, {useContext} from 'react'
import DocumentView from './DocumentView'
import styles from './DocumentArea.module.css';
import ProjectContext from '../../store/project-context';
import EmptyDocument from './EmptyDocument/EmptyDocument';

const DocumentArea = () => {
  const ctx = useContext(ProjectContext); 
  const {observationArray} = ctx; 
  return (
    <div className={styles['area']}>
      {observationArray.length === 0 && <EmptyDocument/>}
      {observationArray.map((observation, index) => <DocumentView observationData={observation} index={index}/>)}
    </div>
  )
}

export default DocumentArea
