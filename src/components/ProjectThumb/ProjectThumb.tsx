import React, {useState, useContext} from 'react'; 
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectType } from '../../library/common/types';
import styles from './ProjectThumb.module.css';
import noImage from '../../library/img/no-image.png'; 
import ThumbMoreActions from '../ThumbMoreActions/ThumbMoreActions';
import { appearOpacity } from '../../library/common/commonData';
import ProjectProvider from '../../store/project-context'; 
interface ProjectThumbInterface {
  data: ProjectType
}

const ProjectThumb: React.FC<ProjectThumbInterface> = ({data}) => {
  const ctx = useContext(ProjectProvider); 
  const {deleteProject} = ctx; 
  const {name, id} = data; 
  const [optionsVisibility, setOptionsVisibility] = useState<boolean>(false); 
  const [optionsActive, setOptionsActive] = useState<boolean>(false); 
  
  const optionsActiveHandler = (state: boolean) => {
    setOptionsActive(state); 
  }

  const mouseLeaveHandler = () => {
    if(!optionsActive){
      setOptionsVisibility(false)
    }
  }

  const handleDeleteProject = () => {
    deleteProject(id); 
  }

  return (
    <motion.div 
      className={styles['thumb-container']}
      onMouseEnter={() => setOptionsVisibility(true)}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className={styles['img-container']}>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
        >
          {optionsVisibility && (
            <ThumbMoreActions 
              handleDeleteProject={handleDeleteProject} 
              optionsActive={optionsActiveHandler} 
              setOptionsVisibility={setOptionsVisibility} 
              className={styles['options-btn']}
            />)
          }
        </AnimatePresence>
        <Link className={styles['link-img']} to={`/project/${id}/table`} >
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
          >
            {optionsVisibility && (
              <motion.div 
                className={styles['overlay']}
                variants={appearOpacity}
                initial="hidden"
                animate="visible"
                exit="exit"
              ></motion.div>
              )
            }
          </AnimatePresence>
          <img className={styles['img']} src={data.coverImage || noImage} alt="project thumbnail" />
        </Link>
      </div>
      <div className={styles['title-container']}>
        <span>{name}</span>
      </div>
    </motion.div>
  )
}

export default ProjectThumb
