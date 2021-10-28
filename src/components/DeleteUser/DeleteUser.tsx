import React, {useContext} from 'react'; 
import ProjectContext from '../../store/project-context';
import UnderBtnActions from '../UnderBtnActions/UnderBtnActions'; 
import styles from './DeleteUser.module.css';
import { ProjectUserType } from '../../library/common/types';
import { appear } from '../../library/common/commonData';
import {motion, AnimateSharedLayout} from 'framer-motion'; 

interface DeleteUserInterface {
  setView: (value: React.SetStateAction<string>) => void;
  deleteUser: ProjectUserType;
}

const DeleteUser: React.FC<DeleteUserInterface> = ({setView, deleteUser}) => {
  const ctx = useContext(ProjectContext); 
  const {deleteProjectUsers} = ctx; 
  const handleDeleteUser = () => {
    deleteProjectUsers(deleteUser.id);
    setView('projectUsersList'); 
  }
  return (
    <AnimateSharedLayout>  
      <motion.div 
        className={styles['data-container']}
        variants={appear}
        initial="hidden"
        animate="visible"
        exit="exit"
        
        >
        <h1>Removing Evaluator</h1>
        <p className={styles['message']}>Are you sure you want to remove <span>{deleteUser.name}</span> from this project? </p>
        <UnderBtnActions
          rightBtnValue="Remove"
          cancelFunction={() => setView('projectUsersList')}
          rightBtnFunction={handleDeleteUser}
        />
      </motion.div>
    </AnimateSharedLayout>
  )
}

export default DeleteUser
