import React, {Fragment, useContext} from 'react'
import { Redirect, useParams } from 'react-router-dom';
import ChartHeury from '../components/ChartHeury/ChartHeury';
import DocumentView from '../components/DocumentView/DocumentView';
import DocuList from '../components/RenderPDF/DocuList';
import Table from '../components/Table/Table';
import {ProjectParams, VisualizationType} from '../library/common/types'; 
import ProjectContext from '../store/project-context';
import styles from './HeuristicChunk.module.css'; 
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer'

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
          
          <PDFDownloadLink document={<DocuList observations={observations}/>} fileName="HEURY" >
            <button> Click on me </button>
          </PDFDownloadLink>
          {observations.map((observation, index) => <DocumentView key={observation.id} observationData={observation} index={index}/>)}
          {/* <DocuList observations={observations}/> */}
        </div>
      }
      {mode === 'table' && <Table id={projectId} filterData={filterData} observations={observations} />}
      {mode === 'stats' && (
        <div className={styles['chart-area']}>
          <div className={styles['chart-container']}>
            <PDFViewer style={{width: '100%', height: '90vh'}}>
              <DocuList observations={observations}/>
            </PDFViewer>
            {/* <ChartHeury data={observations}/> */}
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default HeuristicChunk; 