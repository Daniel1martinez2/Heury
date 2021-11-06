import React, {useState, useContext} from 'react'; 
import ProjectContext from '../../store/project-context';
import {useParams, useHistory} from 'react-router-dom'; 
import { motion } from 'framer-motion';
import { appear } from '../../library/common/commonData';
import styles from './ProjectSettings.module.css'; 
import FileInput from '../FileInput/FileInput';
import AuthInput from '../AuthInput/AuthInput';
import { ProjectParams } from '../../library/common/types';

interface ProjectSettingsInterface {
  onCloseSettings: () => void;
}

const ProjectSettings: React.FC<ProjectSettingsInterface> = ({onCloseSettings}) => {
  const history = useHistory(); 
  const ctx = useContext(ProjectContext); 
  const {setProjectCover, userProjects, setProjectName, deleteProject} = ctx; 
  const params = useParams<ProjectParams>(); 
  const {projectId} = params; 
  const currentProject = userProjects.find(project => project.id === projectId); 
  const [image, setImage] = useState<string>(currentProject?.coverImage || ''); 
  const [input, setInput] = useState<string>(currentProject?.name || '');
  const onSetImage = (img:string) => {
    setImage(img); 
  }
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault(); 
    setProjectCover(projectId, image); 
    setProjectName(projectId, input.trim() === '' ? 'Untitled' : input); 
    onCloseSettings(); 
  };
  const handleInput:React.ChangeEventHandler<HTMLInputElement>  = (e) =>{
    setInput(e.target.value); 
  }
  const handleDeleteProject = () => {
    deleteProject(projectId); 
    history.push('/'); 
  }
  return (
    <motion.div
      variants={appear}
      className={styles['container']}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Project Settings</h1>
      <form
        onSubmit={handleSubmit}
      >
        <div className={styles['form-data']}> 
          <div className={styles['set-image']}>
            <h2>Cover Image</h2>
            <FileInput prevEvidence={image} onSetEvidence={onSetImage}/>
          </div>
          <div className={styles['actions']}>
            <AuthInput 
              className={styles['input']} 
              label="Project Name" 
              placeholder="company, service or app to evaluate" 
              type="text"
              defaultText={input}
              handleChange={handleInput}
            />
            <div className={styles['delete-area']}>
              <span>Warning Area</span>
              <div className={styles['delete-container']}>  
                <button 
                  type="button" 
                  className={[styles['delete'], 'reset-btn'].join(' ')}
                  onClick={handleDeleteProject}
                > 
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <button 
          type="submit" 
          className={[styles['submit'], 'reset-btn'].join(' ')}
        >
          Save Changes
        </button>
      </form>
    </motion.div>
  )
}

export default ProjectSettings
