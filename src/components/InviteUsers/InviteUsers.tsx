import React from 'react'; 
import {motion} from 'framer-motion';
import UserProjectListItem from '../UserProjectListItem/UserProjectListItem';
import {appear} from '../../library/common/commonData'; 
import styles from './InviteUsers.module.css'; 
import {ProjectUserType} from '../../library/common/types'; 
import UnderBtnActions from '../UnderBtnActions/UnderBtnActions';

interface InviteUsersInterface {
  searchUser: string;
  usersArray:  ProjectUserType[]; 
  setSearchUser: (value: React.SetStateAction<string>) => void; 
  setView: (value: React.SetStateAction<string>) => void;
}

const InviteUsers: React.FC<InviteUsersInterface> = ({searchUser, usersArray, setSearchUser, setView}) => {
  
  const handleSearchUser:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchUser(e.target.value); 
    console.log(e.target.value); 
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
          <UserProjectListItem type="search" data={usersArray[0]}/>
        </motion.div>
      )
    }
  }; 
  const handleCancel = () => {
    setSearchUser(''); 
    setView('projectUsersList')
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
        {false && <div className={styles['users-selected']}></div>}
      </div>
      <UnderBtnActions
        rightBtnValue="Invite Evaluators"
        cancelFunction={handleCancel}
        rightBtnFunction={() => null}
      /> 
    </motion.div>
  );
}

export default InviteUsers
