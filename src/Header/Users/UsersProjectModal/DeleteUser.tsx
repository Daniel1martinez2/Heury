import React, {useContext} from 'react'; 
import ProjectContext from '../../../store/project-context';
import UnderBtnActions from './UnderBtnActions'; 
import styles from './UsersProjectModal.module.css';
import { ProjectUserType } from '../../../common/types';

interface DeleteUserInterface {
  setView: (value: React.SetStateAction<string>) => void;
  deleteUser: ProjectUserType;
}

const DeleteUser: React.FC<DeleteUserInterface> = ({setView, deleteUser}) => {
  const ctx = useContext(ProjectContext); 
  const {deleteProjectUsers} = ctx; 
  const handleDeleteUser = () => {
    deleteProjectUsers(deleteUser.id);
    setView('projectUsersList'); 
  }
  return (
    <div className={styles['data-container']}>
      <h1>Removing Evaluator</h1>
      <p className={styles['message']}>Are you sure you want to remove <span>{deleteUser.name}</span> from this project? </p>
      <UnderBtnActions
        rightBtnValue="Remove"
        cancelFunction={() => setView('projectUsersList')}
        rightBtnFunction={handleDeleteUser}
      />
    </div>
  )
}

export default DeleteUser
