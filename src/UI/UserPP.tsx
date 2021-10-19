import React from 'react'
import styles from './UserPP.module.css'; 
interface UserPPInterface {
  imgSource: string;
  className?: string;
}
const UserPP:React.FC<UserPPInterface> = ({imgSource, className}) => {
  return (
    <img className={`${className} ${styles['img-profile']}`} src={imgSource} alt="profile" />
  )
}

export default UserPP
