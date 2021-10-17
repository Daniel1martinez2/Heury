import React from 'react'
import styles from './UsersProjectModal.module.css';

interface underBtnActionsInterface {
  rightBtnValue: string; 
  cancelFunction: () => void; 
  rightBtnFunction: () => void;  
}

const UnderBtnActions:React.FC<underBtnActionsInterface> = ({rightBtnValue, cancelFunction, rightBtnFunction}) => {
  return (
    <div className={styles['btn-container']}>
          <button 
            onClick={cancelFunction}
            className={`reset-btn ${styles['cancel']}`}
          >
            Cancel
          </button>
          <button 
            onClick={rightBtnFunction}
            className={`reset-btn ${styles['add']} ${styles['active']}`}
          >
            {rightBtnValue}
          </button>
      </div>
  );
}

export default UnderBtnActions; 