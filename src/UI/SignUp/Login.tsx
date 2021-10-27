import React from 'react'; 
import mail from '../../img/mail.svg'; 
import lock from '../../img/lock.svg'; 
import styles from './SignUp.module.css'; 
import { Link} from 'react-router-dom';

const Login = () => {
  return (
    <form className={styles['form']}>
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
          <Link to="/session/register" className={styles['link']}>Register</Link>
        </span>
      </div>
    </form>
  )
}

export default Login
