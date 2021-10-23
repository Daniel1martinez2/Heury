import { motion } from 'framer-motion';
import React from 'react'; 
import { Link } from 'react-router-dom';
import styles from './ProjectThumb.module.css';

const ProjectThumb = () => {
  return (
    <motion.div whileHover={{scale: 1.05}} className={styles['thumb-container']}>
      <Link to="/project/alooooo/table" >
        <img src="https://cdn.dribbble.com/users/584216/screenshots/16446283/media/8102a68338fc86f7f229af5238bd9d2d.jpg?compress=1&resize=400x300" alt="si" />
      </Link>    
      <div className={styles['title-container']}>
        <span>Monday 2021 report</span>
      </div>
    </motion.div>
  )
}

export default ProjectThumb
