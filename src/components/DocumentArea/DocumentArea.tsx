import React, {useContext} from 'react'
import DocumentView from '../DocumentView/DocumentView'
import styles from './DocumentArea.module.css';
import ProjectContext from '../../store/project-context';
import EmptyDocument from '../EmptyDocument/EmptyDocument';
import {Redirect} from 'react-router'; 

interface DocumentAreaInterface {
  id: string
}

const DocumentArea: React.FC<DocumentAreaInterface> = ({id}) => {
  const ctx = useContext(ProjectContext); 
  const {userProjects} = ctx; 
  const currentProject = userProjects.find(project => project.id === id); 
  if(!currentProject){
    return <Redirect to="/"/>
  }
  const {observations} = currentProject;

  return (
    <div className={styles['area']}>
      {observations.length === 0 && <EmptyDocument/>}
      {observations.map((observation, index) => <DocumentView key={observation.id} observationData={observation} index={index}/>)}
    </div>
  )
}

export default DocumentArea
