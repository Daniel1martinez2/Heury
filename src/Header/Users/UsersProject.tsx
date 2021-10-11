import React, {useRef, useEffect, useContext, useCallback, useState} from 'react';
import UserPP from '../../UI/UserPP';
import styles from './UserProject.module.css';
import '../../index.css'
import {projectUserType} from '../../common/types'; 
import UserProjectListItem from '../../HeuristicChunk/Table/TableActions/UserProjectListItem/UserProjectListItem';



const testData:projectUserType[] = [
  {
    role: 'owner',
    profileImg: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40',
    name: 'Daniel'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Nath'
  },
  {
    role: 'collaborator',
    profileImg: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    name: 'Sofia Martinez Villegas'
  }
]

interface UsersProjectModalInterface {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const UsersProjectModal: React.FC<UsersProjectModalInterface> = ({setModalVisible}) => {
  const containerRef = useRef<HTMLDivElement>(null); 

  const handleClickOutside = useCallback((event) => {
    if(containerRef && containerRef.current && containerRef.current && !containerRef.current.contains(event.target)){
      setModalVisible(false); 
    }
  }, [setModalVisible]); 

  useEffect(()=>{
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return(
    <div 
      className={styles['project-users-info']}
      ref={containerRef}
    >
      <React.Fragment>
        <div className={styles['list']}>
          {testData.map(elem => <UserProjectListItem key={Math.random()} data={elem}/> )}
        </div>
        <button className={`reset-btn ${styles['btn']}`}>Invite Evaluators</button>
      </React.Fragment>
    </div>
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
      {modalVisible && <UsersProjectModal setModalVisible={setModalVisible} />}
    </div>
  )
}

export default UsersProject
