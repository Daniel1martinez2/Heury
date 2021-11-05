import React, {useState} from 'react'
import {slideIn} from '../../library/common/commonData'; 
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion'; 
import useClickOutside from '../../hooks/use-clickOutside'; 
import { ProjectUserType } from '../../library/common/types';
import styles from './UsersProjectModal.module.css'; 
import ProjectUsersList from '../ProjectUsersList/ProjectUsersList';
import DeleteUser from '../DeleteUser/DeleteUser' ;
import InviteUsers from '../InviteUsers/InviteUsers'; 
import UserActions from '../UserActions/UserActions'; 

interface UsersProjectModalInterface {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  usersArray?: ProjectUserType[];
  type: 'home' | 'project';
  projectId: string;
}

const UsersProjectModal: React.FC<UsersProjectModalInterface> = ({setModalVisible, usersArray, type, projectId}) => {
  const containerRef = useClickOutside(setModalVisible); 
  const [view, setView] = useState('projectUsersList'); 
  const [searchUser, setSearchUser ] = useState<string>(''); 
  const [deleteUser, setDeleteUser] = useState<ProjectUserType>(); 

  const setCurrentUserToDelete = (id: string) => {
    setView('deleteUser')
    if(!!usersArray) setDeleteUser(usersArray.find(user => user.id === id))
  }; 
  
  const setViewModal = (usersArray:ProjectUserType[]) => {
    switch(view){
      case 'projectUsersList':
        return <ProjectUsersList 
          onDelete={setCurrentUserToDelete} 
          usersArray={usersArray} 
          setView={setView} />;  
      case 'inviteUsers':
        return <InviteUsers 
          searchUser={searchUser} 
          usersArray={usersArray} 
          setSearchUser={setSearchUser} 
          setView={setView} />; 
      case 'deleteUser':
        if (deleteUser){
          return <DeleteUser 
            setView={setView} 
            deleteUser={deleteUser}
            projectId={projectId}
            />
        }
    }
  };
  
  const renderContent = () => {
    switch (type) {
      case 'home': 
        return <UserActions />; 
      case 'project': 
        return !!usersArray? setViewModal(usersArray): <h1>s</h1>; 
    }
  }
  
  return(
    <AnimateSharedLayout>
      <motion.div 
        className={styles['project-users-info']}
        ref={containerRef}
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div 
          layout
          className={styles['view-container']}
        >
          <AnimatePresence>
            {renderContent()}
          </AnimatePresence> 
        </motion.div>
      </motion.div>
    </AnimateSharedLayout>
  )
}

export default UsersProjectModal; 