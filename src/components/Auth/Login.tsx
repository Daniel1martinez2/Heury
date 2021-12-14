import React, {useState} from 'react'; 
import mail from '../../library/img/mail.svg'; 
import lock from '../../library/img/lock.svg'; 
import styles from './Auth.module.css'; 
import {motion} from 'framer-motion'; 
import {appear} from '../../library/common/commonData'; 
import AuthInput from '../AuthInput/AuthInput'; 

interface LoginInterface {
  setMode: React.Dispatch<React.SetStateAction<string>>; 
}

const Login: React.FC<LoginInterface> = ({setMode}) => {
  const [mailInput, setMailInput] = useState('');
  const [password, setPassword] = useState('');

  const mailInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setMailInput(e.target.value); 
  const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value); 


  const submitHandler = () => {
    console.log(mailInput, password);
  }

  return (
    <motion.form 
      className={styles['form']}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AuthInput 
        label="Mail" 
        placeholder="user@mail.com" 
        icon={mail} 
        type={'text'} 
        defaultText={mailInput}
        handleChange={mailInputHandler}
        />
      <AuthInput 
        label="Password" 
        placeholder="6 characters" 
        icon={lock} 
        type={'password'} 
        defaultText={password}
        handleChange={passwordHandler}
      />
      
      <div className={styles['bottom-actions']}>
        <button 
          className={['reset-btn', styles['submit']].join(' ')}
          onClick={submitHandler}
        >
            Login
          </button>
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
