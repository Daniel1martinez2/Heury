import React, {useState} from 'react'
import {ProjectUserType} from '../../library/common/types'; 
import UserPP from '../../UI/UserPP';
import styles from './UserProjectListItem.module.css';

interface UserProjectListItemInterface {
  data:ProjectUserType; 
  type: 'search' | 'list';
  onClick?: (id:string) => void;
  handleSelectUser?: (user: ProjectUserType) => void
}

const UserProjectListItem: React.FC<UserProjectListItemInterface> = ({data, type, onClick, handleSelectUser}) => {
  const {role, profileImg, name} = data;
  const [deleteText, setDeleteText] = useState<string>(role); 
  
  const verifyOwner = () => role !== 'owner'; 

  const handleOnclick = () => {
    if(type === 'search' && !!handleSelectUser) {
      return handleSelectUser(data); 
    }
    return () => {}
  }
  
  return (
    <div 
      className={styles['user-project-list-item']}
      onMouseOver={() => verifyOwner() ? setDeleteText('Remove'): null }
      onMouseLeave={() => verifyOwner() ? setDeleteText(role): null }
      onClick={handleOnclick}
    >
      <div className={styles['user-info']}>
        <UserPP imgSource={profileImg || ''}/>      
        <h1>{name}</h1>
      </div>
      {type === 'list' && 
        <span 
          className={ verifyOwner() ? styles['active'] : '' } 
          onClick={() => verifyOwner() ? onClick? onClick(data.id): null : null }
        >
          {deleteText}
        </span>
      }
    </div>
  ) 
}; 
export default UserProjectListItem; 