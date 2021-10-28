import React from 'react'
import user from '../../library/img/user.svg'; 
import mail from '../../library/img/mail.svg'; 
import lock from '../../library/img/lock.svg'; 
import styles from './Auth.module.css'; 
import {motion} from 'framer-motion'; 
import {appear} from '../../library/common/commonData'; 
import AuthInput from '../AuthInput/AuthInput'; 

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

      <AuthInput label="Name" placeholder="name" icon={user} type={'text'} />
      <AuthInput label="Mail" placeholder="user@mail.com" icon={mail} type={'text'} />
      <AuthInput label="Password" placeholder="6 characters" icon={lock} type={'password'} />
      <AuthInput label="Confirm Password" placeholder="6 characters" icon={lock} type={'password'} />

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
