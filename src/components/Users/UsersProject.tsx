import React, {useState, useContext, Fragment} from 'react';
import ProjectContext from '../../store/project-context';
import UserPP from '../../UI/UserPP';
import styles from './UserProject.module.css';
import {AnimatePresence} from 'framer-motion'; 
import UsersProjectModal from '../UsersProjectModal/UsersProjectModal'; 

interface UsersProjectInterface {
  type: 'project' | 'home'
}

const UsersProject: React.FC<UsersProjectInterface> = ({type}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {projectUsers, user} = useContext(ProjectContext); 
  
  const renderUserProject = () => {
    switch (type){
      case 'project':
        return (
          <Fragment>
            {projectUsers.length !== 1 && <span className={styles['users-length']}>+{projectUsers.length-1}</span>}
            <UserPP className={styles['main-pp']} imgSource={user.profileImg? user.profileImg : ''}/>      
          </Fragment>
        );
      case 'home': 
          return (
            <Fragment>
              <span>{user.name}</span>
              <UserPP className={styles['main-pp']} imgSource={user.profileImg? user.profileImg : ''}/>      
            </Fragment>
          ); 
    }
  }

  return (
    <div className={styles['container']}>
      <div 
        className={styles['container-main']}
        onClick={() => setModalVisible(true)}
      >
        {renderUserProject()}
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
      >
        {modalVisible && <UsersProjectModal type={type} usersArray={projectUsers} setModalVisible={setModalVisible} />}
      </AnimatePresence>
    </div>
  )
}

export default UsersProject
