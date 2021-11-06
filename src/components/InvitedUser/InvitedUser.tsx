import React from 'react';
import styles from './InvitedUser.module.css'; 
import UserPP from '../../UI/UserPP';
import cancel from '../../library/img/cancel.svg'; 
import { ProjectUserType } from '../../library/common/types';

interface InvitedUserInterface {
  data:ProjectUserType; 
  handleDeleteUser: (id: string ) => void;
}

const InvitedUser:React.FC<InvitedUserInterface> = ({data, handleDeleteUser}) => {
  const {profileImg, name, id} = data;
  const onDelete = () => handleDeleteUser(id); 
  return (
    <div className={styles['invited-container']}>
      <UserPP imgSource={profileImg || ''} />
      <span>{name}</span>
      <button 
        className="reset-btn"
        onClick={onDelete}
      >
        <img src={cancel} alt="cancel" />
      </button>
    </div>
  )
}

export default InvitedUser
