import React from 'react'
import styles from './UserPP.module.css'; 
interface UserPPInterface {
  imgSource: string;
}
const UserPP:React.FC<UserPPInterface> = ({imgSource}) => {
  return (
    <img className={styles['img-profile']} src={imgSource} alt="profile" />
  )
}

export default UserPP
