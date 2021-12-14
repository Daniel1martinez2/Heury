import React, {Fragment, useContext, useRef} from 'react'
import { Redirect, useParams } from 'react-router-dom';
import ChartHeury from '../components/ChartHeury/ChartHeury';
import downloadIcon from '../library/img/download.svg'; 
import Table from '../components/Table/Table';
import {ProjectParams, VisualizationType} from '../library/common/types'; 
import ProjectContext from '../store/project-context';
import styles from './HeuristicChunk.module.css'; 
import ExportableComponent from '../components/ExportableComponent/ExportableComponent'; 

interface HeuristicChunkInterface {
  mode: VisualizationType; 
}

const HeuristicChunk:React.FC <HeuristicChunkInterface>  = ({mode}) => {
  const ctx = useContext(ProjectContext); 
  const {userProjects, filterData} = ctx; 
  const params = useParams<ProjectParams>();
  const childRef = useRef<any>();
  const {projectId} = params;  
  const currentProject = userProjects.find(project => project.id === projectId); 
  if(!currentProject) {
    
    console.log(currentProject, 'aaaaa', userProjects);
    return <Redirect to="/"/>
  }
  const {observations, name} = currentProject;
  

  return (
    <Fragment>
      {mode === 'document' && 
        <div 
          className={styles['area']}
        >
          <button 
            className={['reset-btn', styles['btn']].join(' ')}
            onClick={() => childRef.current.getAlert()}
            >
              <img src={downloadIcon} alt="downloadIcon" />
              <span>Download</span>
            </button>
          <ExportableComponent 
            ref={childRef} 
            observations={observations}
            projectName={name}
          />
          {/* {observations.map((observation, index) => <DocumentView key={observation.id} observationData={observation} index={index}/>)} */}
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