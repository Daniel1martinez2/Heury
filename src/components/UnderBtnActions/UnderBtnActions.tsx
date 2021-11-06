import React from 'react'
import styles from './UnderBtnActions.module.css';

interface underBtnActionsInterface {
  rightBtnValue: string; 
  cancelFunction: () => void; 
  rightBtnFunction: () => void;  
  disableRightBtn?: boolean
}

const UnderBtnActions:React.FC<underBtnActionsInterface> = ({rightBtnValue, cancelFunction, rightBtnFunction, disableRightBtn}) => {
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
            className={['reset-btn', styles['add'], styles['active'], disableRightBtn ? styles['disabled'] : ''].join(' ')}
          >
            {rightBtnValue}
          </button>
      </div>
  );
}

export default UnderBtnActions; 