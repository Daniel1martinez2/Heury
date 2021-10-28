import React from 'react'; 
import mail from '../../library/img/mail.svg'; 
import lock from '../../library/img/lock.svg'; 
import styles from './SignUp.module.css'; 
import {motion} from 'framer-motion'; 
import {appear} from '../../library/common/commonData'; 

interface LoginInterface {
  setMode: React.Dispatch<React.SetStateAction<string>>; 
}

const Login: React.FC<LoginInterface> = ({setMode}) => {
  return (
    <motion.form 
      className={styles['form']}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
      <div className={styles['bottom-actions']}>
        <button className={['reset-btn', styles['submit']].join(' ')}>Login</button>
        <span className={styles['bottom-mss']}>
          Not have an account?
          <span 
            onClick={() => setMode('register')}
            className={styles['link']}
          >
            Register
          </span>
        </span>
      </div>
    </motion.form>
  )
}

export default Login
