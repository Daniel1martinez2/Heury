import React from 'react'
import user from '../../img/user.svg'; 
import mail from '../../img/mail.svg'; 
import lock from '../../img/lock.svg'; 
import styles from './SignUp.module.css'; 
import { Link} from 'react-router-dom';

const Register = () => {
  return (
    <form className={styles['form']}>
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
        <button className={['reset-btn', styles['submit']].join(' ')}>Sign up</button>
        <span className={styles['bottom-mss']}>
          Already have an account?
          <Link to="/session/login" className={styles['link']}>Sign Up</Link>
        </span>
      </div>
    </form>
  )
}

export default Register
