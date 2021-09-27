import React from 'react'

import styles from './ModalCard.module.css'; 
const ModalCard = ({children, className}: {children: JSX.Element, className?: string}) => {
  return (
    <div  className={`${styles['modal-card']} ${className}`}>
      {children}
    </div>
  )
}
export default ModalCard; 