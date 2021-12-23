import React, {Fragment, useState, useContext} from 'react'; 
import ProjectContext from '../../store/project-context'; 
import mail from '../../library/img/mail.svg'; 
import lock from '../../library/img/lock.svg'; 
import styles from './Auth.module.css'; 
import {motion} from 'framer-motion'; 
import {appear} from '../../library/common/commonData'; 
import AuthInput from '../AuthInput/AuthInput'; 
import { handleAuth } from '../../utils/authApi';
import Loader from '../Loader/Loader';
import { useHistory} from 'react-router-dom';
import { findUserByMail } from '../../utils/apiFIrebase';


interface LoginInterface {
  setMode: React.Dispatch<React.SetStateAction<string>>; 
}

const Login: React.FC<LoginInterface> = ({setMode}) => {
  const [mailInput, setMailInput] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(ProjectContext); 
  const {login, setUserHandler} = ctx; 

  const mailInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setMailInput(e.target.value); 
  const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value); 
  const history = useHistory(); 

  const submitHandler:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault(); 
    setIsLoading(true); 

    handleAuth('login', mailInput, password)
    .then(res => {
      setIsLoading(false); 
      if(res.ok){
        console.log(res);
        return res.json(); 
      }else{
        return res.json().then(data => {
          //Show an error modal
          console.log(data.error.message);
          throw new Error(data.error.message);
        })
      }
    })
    .then(data => {
      console.log(data);
      login(data.idToken);
      findUserByMail(mailInput).then( data => {
        console.log( data, '😳 si señorr');
        if(!data) return
        setUserHandler({name: data.name, id: data.id, profileImg: 'https://avatars.githubusercontent.com/u/53487916?s=40&v=4', projectsIds:[], mail: data.mail})
        history.push('/'); 
      })
    })
    .catch(err => {}); 
  }

  return (
    <Fragment>

      {isLoading && <Loader/>}
      <motion.form 
        className={styles['form']}
        variants={appear}
        initial="hidden"
        animate="visible"
        exit="exit"
        onSubmit={submitHandler}
        
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
    </Fragment>
  )
}

export default Login