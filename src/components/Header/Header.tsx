import React, {Fragment, useContext, useState} from 'react'; 
import { nanoid } from 'nanoid'; 
import styles from './Header.module.css'; 
import plusSvg from '../../library/img/plus.svg'; 
import settings from '../../library/img/settings.svg'; 
import Nav from '../Nav/Nav'; 
import UsersProject from '../Users/UsersProject';
import Visualization from '../Visualization/Visualization'; 
import ProjectContext from '../../store/project-context'; 
import { ProjectType, VisualizationType } from '../../library/common/types';
import {useHistory} from 'react-router-dom'; 
import ModalScreen from '../../UI/ModalScreen/ModalScreen'; 
import { AnimatePresence } from 'framer-motion';
import ProjectSettings from '../ProjectSettings/ProjectSettings';
import BrandLogo from '../BrandLogo/BrandLogo';
import Loader from '../Loader/Loader'; 

interface HeaderInterface {
  type: 'project' | 'home'; 
  setVisualizationMode?: React.Dispatch<React.SetStateAction<VisualizationType>>;
  visualizationMode?: VisualizationType; 
}

const Header: React.FC<HeaderInterface> = ({type, setVisualizationMode, visualizationMode}) => {
  const history = useHistory(); 
  const ctx = useContext(ProjectContext); 
  const {createProject, user} = ctx; 
  const [modalView, setModalView] = useState<boolean>(false); 
  const [loading, setLoading] = useState<boolean>(false);

  const handleNewProject = () => {
    setLoading(true); 
    const id = nanoid();
    const newProject:ProjectType = {
      name: 'Untitled',
      id,
      users: [{...user, role: 'owner'}],
      observations:[],
    }
    console.log('a');
    createProject(newProject, (newID: string) => {
      setLoading(false);
      console.log(id, 'aaaaaa');
      history.push(`/project/${newID}`);
    });
    
  }

  const handleCloseSettings = () => setModalView(false); 
  

  const renderNav = () => {
    switch (type) {
      case 'project':

        return (
          <Fragment>
            {setVisualizationMode && <Nav setVisualizationMode={setVisualizationMode}/>}
            {setVisualizationMode && visualizationMode && <Visualization visualizationMode={visualizationMode} setVisualizationMode={setVisualizationMode}/>}
            <div className={styles['aside-actions']}>
              <UsersProject type="project"/>
              <button 
                className={['reset-btn', styles['settings']].join(' ')}
                onClick={() => setModalView(true)}
              >
                <img src={settings} alt="settings" />
              </button>
            </div>
          </Fragment>
        ); 
        case 'home':
          return (
            <Fragment>
              { loading &&<Loader/> }
              <BrandLogo type="white" className={styles['logo']}/>
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
        <AnimatePresence
          initial={true}
          exitBeforeEnter={true}
        >
          {modalView &&
            (<ModalScreen setShowModal={setModalView}>
              <ProjectSettings onCloseSettings={handleCloseSettings}/>
            </ModalScreen>)
          }
        </AnimatePresence>
      </div>
  ); 
}

export default Header;