import React, {useState} from 'react';
import UserPP from '../../UI/UserPP';
import styles from './UserProject.module.css';
import '../../index.css'
import {slideIn, testUsers} from '../../common/commonData'; 
import UserProjectListItem from '../../HeuristicChunk/Table/TableActions/UserProjectListItem/UserProjectListItem';
import {motion, AnimatePresence} from 'framer-motion'; 
import useClickOutside from '../../hooks/use-clickOutside'; 



interface UsersProjectModalInterface {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const UsersProjectModal: React.FC<UsersProjectModalInterface> = ({setModalVisible}) => {
  const containerRef = useClickOutside(setModalVisible); 
  
  return(
    <motion.div 
      className={styles['project-users-info']}
      ref={containerRef}
      variants={slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <React.Fragment>
        <div className={styles['list']}>
          {testUsers.map(elem => <UserProjectListItem key={Math.random()} data={elem}/> )}
        </div>
        <button className={`reset-btn ${styles['btn']}`}>Invite Evaluators</button>
      </React.Fragment>
    </motion.div>
  )
}

const UsersProject = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false); 
  return (
    <div className={styles['container']}>
      <div 
        className={styles['container-main']}
        onClick={() => setModalVisible(true)}
      >
        <span>+2</span>
        <UserPP imgSource="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40"/>      
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
      >
        {modalVisible && <UsersProjectModal setModalVisible={setModalVisible} />}
      </AnimatePresence>
    </div>
  )
}

export default UsersProject
