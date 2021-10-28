import { motion } from 'framer-motion'; 
import React from 'react'; 
import { appear } from '../../library/common/commonData'; 
import styles from './UserActions.module.css';
import {useHistory} from 'react-router'; 

interface UserActionsInterface {
  classes?: string
}

const UserActions: React.FC<UserActionsInterface> = ({classes}) => {
  const history = useHistory(); 
  return (
    <motion.div 
      className={styles['user-actions-container']}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <button className="reset-btn">Settings</button>
        <button 
          className="reset-btn"
          onClick={() => history.push('/session')}
        >
          Sign Out
        </button>
    </motion.div>
  )
}

export default UserActions
