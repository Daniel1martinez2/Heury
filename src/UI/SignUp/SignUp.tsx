import React from 'react'
import google from '../../img/google.svg'; 
import git from '../../img/git.svg'; 
import user from '../../img/user.svg'; 
import mail from '../../img/mail.svg'; 
import lock from '../../img/lock.svg'; 
import styles from './SignUp.module.css'; 
import { Link, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const SignUp = () => {
  return (
    <div className={styles['register-container']}>
      <div className={styles['other-register-container']}>
        <button className={['reset-btn', styles['other-register'], styles['google']].join(' ')}>
          <img src={google} alt="" />
          <span>Register with Google</span>
        </button>
        <button className={['reset-btn', styles['other-register']].join(' ')}>
          <img src={git} alt="" />
        </button>
      </div>
      <Route path="/session/login">
        <Login/>
      </Route>
      <Route path="/session/register">
        <Register/>
      </Route>
    </div>
  )
}

export default SignUp
