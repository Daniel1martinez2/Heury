import React, {Fragment} from 'react'
import  {ProjectUserType} from '../../../common/types'; 
import UserProjectListItem from '../../../HeuristicChunk/Table/TableActions/UserProjectListItem/UserProjectListItem';
import styles from './UsersProjectModal.module.css'; 

interface ProjectUsersListInterface {
  usersArray:  ProjectUserType[];
  setView: (value: React.SetStateAction<string>) => void;
  onDelete: (id: string) => void;
}

const ProjectUsersList:React.FC<ProjectUsersListInterface> = ({usersArray, setView, onDelete}) => {

  return (
    <Fragment>
        <div className={styles['list']}>
          {usersArray.map(elem => <UserProjectListItem onClick={onDelete} type="list" key={elem.id} data={elem}/> )}
        </div>
        <button 
          className={`reset-btn ${styles['btn']}`}
          onClick={() => setView('inviteUsers')}
        >
          Invite Evaluators
        </button> 
      </Fragment>
  )
}

export default ProjectUsersList
