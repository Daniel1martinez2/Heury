import React from 'react'; 
import {motion} from 'framer-motion';
import UserProjectListItem from '../../../HeuristicChunk/Table/TableActions/UserProjectListItem/UserProjectListItem';
import {appear} from '../../../common/commonData'; 
import styles from './UsersProjectModal.module.css'; 
import {ProjectUserType} from '../../../common/types'; 
import UnderBtnActions from './UnderBtnActions';

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
    <div className={styles['data-container']}>
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
    </div>
  );
}

export default InviteUsers
