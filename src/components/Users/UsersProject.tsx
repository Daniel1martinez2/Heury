import React, {useState, useContext, Fragment} from 'react';
import ProjectContext from '../../store/project-context';
import UserPP from '../../UI/UserPP';
import styles from './UserProject.module.css';
import {AnimatePresence} from 'framer-motion'; 
import UsersProjectModal from '../UsersProjectModal/UsersProjectModal'; 
import { Redirect, useParams } from 'react-router';
import { ProjectParams } from '../../library/common/types';

interface UsersProjectInterface {
  type: 'project' | 'home';
}

const UsersProject: React.FC<UsersProjectInterface> = ({type}) => {
  const params = useParams<ProjectParams>();
  const {projectId} = params; 
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {userProjects, user} = useContext(ProjectContext); 
  const currentProject = userProjects.find(project => project.id === projectId); 
  

  const renderUserProject = () => {
    switch (type){
      case 'project':
        if(!currentProject) return <Redirect to="/"/>;
        const {users} = currentProject; 
        return (
          <Fragment>
            <span 
              className={styles['users-length']}>
              {users.length !== 1? `+${users.length-1}` : 'Share'}
            </span>
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

  const renderUsesProjectModal = () => {
    if(!currentProject){
      return (
        <UsersProjectModal 
        type={type} 
        setModalVisible={setModalVisible} 
        projectId={projectId}
      />
      )
    };
    const {users} = currentProject; 
    return (
      <UsersProjectModal 
        type={type} 
        usersArray={users} 
        setModalVisible={setModalVisible} 
        projectId={projectId}
      />
    )
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
        {modalVisible && renderUsesProjectModal()}
      </AnimatePresence>
    </div>
  )
}

export default UsersProject
