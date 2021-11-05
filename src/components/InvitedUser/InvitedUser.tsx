import React from 'react';
import styles from './InvitedUser.module.css'; 
import UserPP from '../../UI/UserPP';
import cancel from '../../library/img/cancel.svg'; 

interface InvitedUserInterface {
  name: string;
}

const InvitedUser:React.FC<InvitedUserInterface> = ({name}) => {
  return (
    <div className={styles['invited-container']}>
      <UserPP imgSource={'https://yt3.ggpht.com/yti/APfAmoG52an-5cGP0Y-ho7Ae0v4GqMJ5g1aB7WdY68NJ8g=s88-c-k-c0x00ffffff-no-rj'} />
      <span>{name}</span>
      <img src={cancel} alt="cancel" />
    </div>
  )
}

export default InvitedUser
