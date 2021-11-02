import React, {useState} from 'react'; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProjectType } from '../../library/common/types';
import styles from './ProjectThumb.module.css';
import noImage from '../../library/img/no-image.png'; 
import ThumbMoreActions from '../ThumbMoreActions/ThumbMoreActions';
interface ProjectThumbInterface {
  data: ProjectType
}

const ProjectThumb: React.FC<ProjectThumbInterface> = ({data}) => {
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

  return (
    <motion.div 
      className={styles['thumb-container']}
      onMouseEnter={() => setOptionsVisibility(true)}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className={styles['img-container']}>
        {optionsVisibility && <ThumbMoreActions optionsActive={optionsActiveHandler} setOptionsVisibility={setOptionsVisibility} className={styles['options-btn']}/>}
        <Link className={styles['link-img']} to={`/project/${id}/table`} >
          {optionsVisibility && <div className={styles['overlay']}></div>}
          <img className={styles['img']} src={noImage} alt="project thumbnail" />
        </Link>
      </div>
      <div className={styles['title-container']}>
        <span>{name}</span>
      </div>
    </motion.div>
  )
}

export default ProjectThumb
