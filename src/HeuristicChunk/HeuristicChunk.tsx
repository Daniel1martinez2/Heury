import React, {Fragment, useContext} from 'react'
import { Redirect, useParams } from 'react-router-dom';
import ChartHeury from '../components/ChartHeury/ChartHeury';
import DocumentView from '../components/DocumentView/DocumentView';
import Table from '../components/Table/Table';
import {ProjectParams, VisualizationType} from '../library/common/types'; 
import ProjectContext from '../store/project-context';
import styles from './HeuristicChunk.module.css'; 

interface HeuristicChunkInterface {
  mode: VisualizationType; 
}

const HeuristicChunk:React.FC <HeuristicChunkInterface>  = ({mode}) => {
  const ctx = useContext(ProjectContext); 
  const {userProjects, filterData} = ctx; 
  const params = useParams<ProjectParams>();
  const {projectId} = params;  
  const currentProject = userProjects.find(project => project.id === projectId); 
  if(!currentProject) return <Redirect to="/"/>
  const {observations} = currentProject;

  return (
    <Fragment>
      {mode === 'document' && 
        <div className={styles['area']}>
          {observations.map((observation, index) => <DocumentView key={observation.id} observationData={observation} index={index}/>)}
        </div>
      }
      {mode === 'table' && <Table id={projectId} filterData={filterData} observations={observations} />}
      {mode === 'stats' && (
        <div className={styles['chart-area']}>
          <div className={styles['chart-container']}>
            <ChartHeury data={observations}/>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default HeuristicChunk; 