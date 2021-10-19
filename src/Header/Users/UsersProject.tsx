import React, {useState, useContext} from 'react';
import ProjectContext from '../../store/project-context';
import UserPP from '../../UI/UserPP';
import styles from './UserProject.module.css';
import '../../index.css'
import {AnimatePresence} from 'framer-motion'; 
import UsersProjectModal from './UsersProjectModal/UsersProjectModal'; 

const UsersProject = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {projectUsers} = useContext(ProjectContext); 
  
  return (
    <div className={styles['container']}>
      <div 
        className={styles['container-main']}
        onClick={() => setModalVisible(true)}
      >
        {projectUsers.length !== 1 && <span>+{projectUsers.length-1}</span>}
        <UserPP className={styles['main-pp']} imgSource="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40"/>      
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
      >
        {modalVisible && <UsersProjectModal usersArray={projectUsers} setModalVisible={setModalVisible} />}
      </AnimatePresence>
    </div>
  )
}

export default UsersProject
