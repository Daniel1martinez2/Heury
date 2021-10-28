import { motion } from 'framer-motion';
import React from 'react'; 
import { Link } from 'react-router-dom';
import { ProjectType } from '../../library/common/types';
import styles from './ProjectThumb.module.css';

interface ProjectThumbInterface {
  data: ProjectType
}

const ProjectThumb: React.FC<ProjectThumbInterface> = ({data}) => {
  const {name, id} = data; 
  return (
    <motion.div whileHover={{scale: 1.05}} className={styles['thumb-container']}>
      <Link to={`/project/${id}/table`} >
        <img src="https://cdn.dribbble.com/users/584216/screenshots/16446283/media/8102a68338fc86f7f229af5238bd9d2d.jpg?compress=1&resize=400x300" alt="si" />
      </Link>    
      <div className={styles['title-container']}>
        <span>{name}</span>
      </div>
    </motion.div>
  )
}

export default ProjectThumb
