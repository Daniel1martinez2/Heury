import React, {useState} from 'react'
import google from '../../library/img/google.svg'; 
import git from '../../library/img/git.svg'; 
import styles from './Auth.module.css'; 
import Login from './Login';
import Register from './Register';
import {motion, AnimateSharedLayout} from 'framer-motion';

const SignUp = () => {
  const [mode, setMode] = useState<string>('login');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const errorMessageHandler = (error: string) => {
    setErrorMsg(error); 
  }

  return (
    <AnimateSharedLayout>
      <motion.div layout className={styles['register-container']}>
      {errorMsg.trim() !== '' && <span className={styles['error-message']}>{errorMsg}</span>}
        <div className={styles['other-register-container']}>
          <button className={['reset-btn', styles['other-register'], styles['google']].join(' ')}>
            <img src={google} alt="" />
            <span>Register with Google</span>
          </button>
          <button 
            className={['reset-btn', styles['other-register']].join(' ')}
          >
            <img src={git} alt="" />
          </button>
        </div>
        {mode === 'login' && <Login errorMessageHandler={errorMessageHandler} setMode={setMode}/>}
        {mode === 'register' && <Register errorMessageHandler={errorMessageHandler} setMode={setMode}/>}
      </motion.div>
    </AnimateSharedLayout>
  )
}

export default SignUp