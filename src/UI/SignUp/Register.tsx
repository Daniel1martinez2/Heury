import React from 'react'
import user from '../../library/img/user.svg'; 
import mail from '../../library/img/mail.svg'; 
import lock from '../../library/img/lock.svg'; 
import styles from './SignUp.module.css'; 
import {motion} from 'framer-motion'; 
import {appear} from '../../library/common/commonData'; 

interface RegisterInterface {
  setMode: React.Dispatch<React.SetStateAction<string>>; 
}

const Register:React.FC<RegisterInterface> = ({setMode}) => {
  return (
    <motion.form 
      className={styles['form']}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <label>
          <span>Name</span>
          <div className={styles['input-container']}>
            <img src={user} alt="" />
            <input type="text" placeholder="name" />
          </div>
        </label>
      <label >
        <span>Mail</span>
        <div className={styles['input-container']}>
          <img src={mail} alt="" />
          <input type="text" placeholder="user@mail.com" />
        </div>
      </label>
      <label >
        <span>Password</span>
        <div className={styles['input-container']}>
          <img src={lock} alt="" />
          <input type="password" placeholder="6 characters" />
        </div>
      </label>
        <label >
          <span>Confirm Password</span>
          <div className={styles['input-container']}>
            <img src={lock} alt="" />
            <input type="password" placeholder="6 characters" />
          </div>
        </label>
      <div className={styles['bottom-actions']}>
        <button type="submit" className={['reset-btn', styles['submit']].join(' ')}>Register</button>
        <span className={styles['bottom-mss']}>
          Already have an account?
          <span 
            onClick = {() => setMode('login')}
            className={styles['link']}
          >
            Sign Up
          </span>
        </span>
      </div>
    </motion.form>
  )
}

export default Register
