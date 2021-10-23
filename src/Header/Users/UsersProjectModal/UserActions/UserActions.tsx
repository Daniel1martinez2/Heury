import { motion } from 'framer-motion'; 
import React from 'react'; 
import { appear } from '../../../../common/commonData'; 
import styles from './UserActions.module.css'; 

interface UserActionsInterface {
  classes?: string
}

const UserActions: React.FC<UserActionsInterface> = ({classes}) => {
  return (
    <motion.div 
      className={styles['user-actions-container']}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <button className="reset-btn">Settings</button>
        <button className="reset-btn">Sign Out</button>
    </motion.div>
  )
}

export default UserActions
