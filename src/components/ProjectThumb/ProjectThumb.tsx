import { motion } from 'framer-motion';
import React from 'react'; 
import { Link } from 'react-router-dom';
import { ProjectType } from '../../library/common/types';
import styles from './ProjectThumb.module.css';
import noImage from '../../library/img/no-image.png'; 
interface ProjectThumbInterface {
  data: ProjectType
}

const ProjectThumb: React.FC<ProjectThumbInterface> = ({data}) => {
  const {name, id} = data; 
  return (
    <motion.div whileHover={{scale: 1.05}} className={styles['thumb-container']}>
      <Link to={`/project/${id}/table`} >
        <img src={noImage} alt="si" />
      </Link>    
      <div className={styles['title-container']}>
        <span>{name}</span>
      </div>
    </motion.div>
  )
}

export default ProjectThumb
