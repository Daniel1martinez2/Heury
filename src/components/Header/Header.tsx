import React, {Fragment, useContext} from 'react'
import styles from './Header.module.css'; 
import plusSvg from '../../library/img/plus.svg'; 
import Nav from '../Nav/Nav'; 
import UsersProject from '../Users/UsersProject';
import Visualization from '../Visualization/Visualization'; 
import ProjectContext from '../../store/project-context'; 
import { ProjectType, VisualizationType } from '../../library/common/types';
import {useHistory} from 'react-router-dom'; 

interface HeaderInterface {
  type: 'project' | 'home'; 
  setVisualizationMode?: React.Dispatch<React.SetStateAction<VisualizationType>>;
  visualizationMode?: VisualizationType; 
}

const Header: React.FC<HeaderInterface> = ({type, setVisualizationMode, visualizationMode}) => {
  const history = useHistory(); 
  const ctx = useContext(ProjectContext); 
  const {createProject, user} = ctx; 

  const handleNewProject = () => {
    const id = Math.random().toString(); 
    const newProject:ProjectType = {
      name: 'Untitled',
      id,
      users: [{...user, role: 'owner'}],
      observations:[],
    }
    createProject(newProject);
    history.push(`/project/${id}/table`); 
  }

  const renderNav = () => {
    switch (type) {
      case 'project':
        return (
          <Fragment>
            {setVisualizationMode && <Nav setVisualizationMode={setVisualizationMode}/>}
            {setVisualizationMode && visualizationMode && <Visualization visualizationMode={visualizationMode} setVisualizationMode={setVisualizationMode}/>}
            <UsersProject type="project"/>
          </Fragment>
        ); 
      case 'home':
        return (
          <Fragment>
            <h1 className={styles['logo']}>Heury</h1>
            <div className={styles['right-content']}>
              <button 
                onClick={handleNewProject}
                className={`reset-btn ${styles['button']}`}
              >
                <img src={plusSvg} alt="sss" />
                Report
              </button>
              <UsersProject type="home"/>
            </div>
          </Fragment>
        ); 
    }
  }
  return(
      <div className={styles['page-header']}>
        {renderNav()}
      </div>
  ); 
}

export default Header;