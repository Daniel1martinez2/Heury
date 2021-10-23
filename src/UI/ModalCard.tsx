import React from 'react'; 

import styles from './ModalCard.module.css'; 

interface ModalCardInterface {
  children?: React.ReactNode; 
  className?: string; 

}

const ModalCard: React.FC<ModalCardInterface> = ({children, className}) => {
  return (
    <div  className={`${styles['modal-card']} ${className}`}>
      {children}
    </div>
  )
}
export default ModalCard; 