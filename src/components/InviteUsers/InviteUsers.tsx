import React, {useState, useContext} from 'react'; 
import ProjectContext from '../../store/project-context'; 
import {motion} from 'framer-motion';
import UserProjectListItem from '../UserProjectListItem/UserProjectListItem';
import {appear, testUsers} from '../../library/common/commonData'; 
import styles from './InviteUsers.module.css'; 
import {ProjectUserType} from '../../library/common/types'; 
import UnderBtnActions from '../UnderBtnActions/UnderBtnActions';
import InvitedUser from '../InvitedUser/InvitedUser';

interface InviteUsersInterface {
  searchUser: string;
  setSearchUser: (value: React.SetStateAction<string>) => void; 
  projectId: string;
  handleResetView: () => void; 
}

const InviteUsers: React.FC<InviteUsersInterface> = ({searchUser, setSearchUser, projectId, handleResetView}) => {
  const ctx = useContext(ProjectContext); 
  const {addUsersProject, userProjects} = ctx; 
  const [selectedUsers, setSelectedUsers ] = useState<ProjectUserType[]>([]); 
  const currentProject = userProjects.find(project => project.id === projectId); 
  const handleSearchUser:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchUser(e.target.value); 
  }
  
  const getSearchUserArray = (value: string) => {
    const regex = new RegExp(`^${value.toLowerCase()}`, 'i'); 
    return testUsers.filter(user => (
      regex.test(user.name.toLowerCase()) 
      && !selectedUsers.includes(user) 
      && !currentProject?.users.includes(user)
    ))
  }

  const handleSelectUser = (user: ProjectUserType) => {
    setSelectedUsers(prev => [user, ...prev]); 
    setSearchUser(''); 
  }

  const handleDeleteUser = (id:string) => {
    setSelectedUsers(prev => prev.filter(user => user.id !== id)); 
  }

  const handleInviteUsers = () => {
    if (selectedUsers.length > 0){
      addUsersProject(projectId, selectedUsers); 
      handleResetView(); 
    }
  }

  const recommendUserListActive = () => {
    if(searchUser.trim() !== ''){
      return (
        <motion.div 
          className={styles['recommend-users-container']}
          variants={appear}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {getSearchUserArray(searchUser).map(user => (
            <UserProjectListItem 
              key={user.id} 
              type="search" 
              data={user}
              handleSelectUser={handleSelectUser}
            />
          ))}
        </motion.div>
      )
    }
  }; 
  const handleCancel = () => {
    setSearchUser(''); 
    handleResetView(); 
  }
  return(
    <motion.div 
      className={styles['data-container']}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Invite Evaluators To This Project</h1>
      <div className={styles['actions-container']}>
        <input 
          value={searchUser}
          onChange={handleSearchUser}
          placeholder="user@mail.com" 
          className={styles['input']} 
          type="text" 
        />
        {recommendUserListActive()}
        {true && (
          <div className={styles['users-selected']}>
            {selectedUsers.map(user => <InvitedUser key={user.id} handleDeleteUser={handleDeleteUser} data={user}/>)}
            
          </div>
        )}
      </div>
      <UnderBtnActions
        rightBtnValue="Invite Evaluators"
        cancelFunction={handleCancel}
        rightBtnFunction={handleInviteUsers}
        disableRightBtn={selectedUsers.length === 0}
      /> 
    </motion.div>
  );
}

export default InviteUsers
