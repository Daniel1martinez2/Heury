import {projectUserType} from '../../../../common/types'; 
import UserPP from '../../../../UI/UserPP';
import styles from './UserProjectListItem.module.css';

interface UserProjectListItemInterface {
  data:projectUserType
}

const UserProjectListItem: React.FC<UserProjectListItemInterface> = ({data}) => {
  const {role, profileImg, name} = data; 
  return (
    <div className={styles['user-project-list-item']}>
      <div className={styles['user-info']}>
        <UserPP imgSource={profileImg || ''}/>      
        <h1>{name}</h1>
      </div>
      <span>{role}</span>
    </div>
  ) 
}; 
export default UserProjectListItem; 