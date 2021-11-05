import React, {useState, useRef, useContext} from 'react'
import { Link, useParams } from 'react-router-dom';
import { ProjectParams, VisualizationType } from '../../library/common/types';
import styles from './Nav.module.css'; 
import ProjectContext from '../../store/project-context'; 


interface NavInterface {
  setVisualizationMode: React.Dispatch<React.SetStateAction<VisualizationType>>;
}
const Nav: React.FC<NavInterface> = ({setVisualizationMode}) => {
  const [disabled, setDisabled] = useState(false); 
  const ctx = useContext(ProjectContext); 
  const {setProjectName, userProjects} = ctx;
  const params = useParams<ProjectParams>();
  const {projectId} = params; 
  const currentInput = useRef<HTMLInputElement>(null);   
  const currentProject = userProjects.find(project => project.id === projectId); 

  const handleFocus = () => {
    if(!!currentInput && currentInput.current){
      currentInput?.current?.focus()
    }
  }
  const handleTextInput:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setProjectName(projectId, event.target.value);
  }
  const handleEnableInputDClick = () => {
    if(!!currentInput && !!currentInput.current){
      currentInput?.current?.select()
    }
    setDisabled(true)
    handleFocus(); 
  }
  const handleInputBlur = () => {
    setDisabled(false); 
    if(currentProject?.name.trim().length === 0){
      setProjectName(projectId, 'Untitled')
    }
  }

  return(
    <div className={styles['page-header__project']}>
        <Link
          onClick={() => setVisualizationMode('table')} 
          to="/"
          className={styles['link']}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 3.20399V12.796L4.519 7.99999L10 3.20399ZM9.341 2.45099L3.861 7.24699C3.75359 7.34085 3.6675 7.4566 3.60852 7.58648C3.54954 7.71636 3.51902 7.85735 3.51902 7.99999C3.51902 8.14263 3.54954 8.28362 3.60852 8.4135C3.6675 8.54337 3.75359 8.65913 3.861 8.75299L9.34 13.549C9.989 14.115 11 13.655 11 12.796V3.20399C11.0002 3.01174 10.9449 2.82353 10.8409 2.66188C10.7368 2.50023 10.5884 2.372 10.4133 2.29254C10.2383 2.21308 10.044 2.18577 9.85382 2.21387C9.66364 2.24197 9.48559 2.3243 9.341 2.45099Z"
              fill="#FAFAFE" />
          </svg>
          <h1>All Reports </h1>
        </Link>
        <h1>/</h1>
        <div className={styles["container"]}>
          <div onDoubleClick={handleEnableInputDClick} className={`${styles["clickable"]} ${disabled && styles['hidden']}`}/>
          <input 
            onBlur={handleInputBlur} 
            ref={currentInput} 
            onChange={handleTextInput} 
            type="text"
            autoComplete="off" 
            value={currentProject?.name}/>
        </div>
        
      </div>
  ); 
}

export default Nav; 