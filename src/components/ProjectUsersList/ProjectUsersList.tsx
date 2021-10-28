import React from 'react'
import  {ProjectUserType} from '../../library/common/types'; 
import  {appear} from '../../library/common/commonData'; 
import UserProjectListItem from '../UserProjectListItem/UserProjectListItem';
import styles from './ProjectUsersList.module.css';
import {motion} from 'framer-motion'; 

interface ProjectUsersListInterface {
  usersArray:  ProjectUserType[];
  setView: (value: React.SetStateAction<string>) => void;
  onDelete: (id: string) => void;
}

const ProjectUsersList:React.FC<ProjectUsersListInterface> = ({usersArray, setView, onDelete}) => {

  return (
    <motion.div 
      className={styles['list-container']}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <div className={styles['list']}>
          {usersArray.map(elem => <UserProjectListItem onClick={onDelete} type="list" key={elem.id} data={elem}/> )}
        </div>
        <button 
          className={`reset-btn ${styles['btn']}`}
          onClick={() => setView('inviteUsers')}
        >
          Invite Evaluators
        </button> 
      </motion.div>
  )
}

export default ProjectUsersList
