import React from 'react'
import styles from './UserPP.module.css'; 
import pp from './pp.png'; 
interface UserPPInterface {
  imgSource: string;
  className?: string;
}
const UserPP:React.FC<UserPPInterface> = ({imgSource, className}) => {
  return (
    <img 
      className={`${className} ${styles['img-profile']}`} 
      src={pp} 
      alt="profile" 
    />
  )
}

export default UserPP
