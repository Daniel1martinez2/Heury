import React, {Fragment, useState, useContext} from 'react';
import user from '../../library/img/user.svg'; 
import mail from '../../library/img/mail.svg'; 
import lock from '../../library/img/lock.svg'; 
import styles from './Auth.module.css'; 
import {motion} from 'framer-motion'; 
import {appear} from '../../library/common/commonData'; 
import AuthInput from '../AuthInput/AuthInput'; 
import { handleAuth } from '../../utils/authApi';
import Loader from '../Loader/Loader'; 
import { useHistory} from 'react-router-dom';
import { addUserRefToFirebase, findUserByMail } from '../../utils/apiFIrebase';
import ProjectContext from '../../store/project-context'; 


interface RegisterInterface {
  setMode: React.Dispatch<React.SetStateAction<string>>; 
}

const Register:React.FC<RegisterInterface> = ({setMode}) => {
    
  const [name, setName] = useState('');
  const [mailInput, setMailInput] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //form validations
  const [weakPassword, setWeakPassword] = useState('');

  const ctx = useContext(ProjectContext); 
  const {login, setUserHandler} = ctx; 
  const history = useHistory(); 

  const setNameHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setName(e.target.value); 
  const mailInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setMailInput(e.target.value); 
  const passwordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value); 
  const confirmedPasswordHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => setConfirmedPassword(e.target.value); 

  const submitHandler:React.FormEventHandler<HTMLFormElement> = (e) => {
    setIsLoading(true)
    e.preventDefault(); 
    console.log(name, mailInput, password, confirmedPassword);
    //FIREBASE 🔥🔥🔥🔥
    handleAuth('register', mailInput, password)
    .then(res => {
      setIsLoading(false); 
      if(res.ok){
        console.log(res);
        return res.json(); 
      }else{
        return res.json().then(data => {
          //Show an error modal
          throw new Error(data.error.message);
        })
      }
    })
    .then(data => {
      console.log(data);
      addUserRefToFirebase({name, id: '', projectsIds: [], mail: mailInput })

      //LOGIN --------------------------------
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
          setUserHandler({name: data.name, id: data.id, profileImg: 'https://avatars.githubusercontent.com/u/53487916?s=40&v=4', projectsIds:data.projectsIds || [], mail: data.mail})
          history.push('/'); 
        })
      })
      .catch(err => {}); 

    })
    .catch(err => setWeakPassword('paila')); 
    
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
          label="Name" 
          placeholder="name" 
          icon={user} 
          type={'text'} 
          defaultText={name}
          handleChange={setNameHandler}
        />
        <AuthInput 
          label="Mail" 
          placeholder="user@mail.com" 
          icon={mail} 
          type={'text'}
          defaultText={mailInput}
          handleChange={mailInputHandler}
        />
        <AuthInput
          error={weakPassword}
          label="Password" 
          placeholder="6 characters" 
          icon={lock} 
          type={'password'}
          defaultText={password}
          handleChange={passwordHandler}
          />
        <AuthInput 
          label="Confirm Password" 
          placeholder="6 characters" 
          icon={lock} 
          type={'password'} 
          defaultText={confirmedPassword}
          handleChange={confirmedPasswordHandler}
        />

        <div className={styles['bottom-actions']}>
          <button 
            type="submit" 
            className={['reset-btn', styles['submit']].join(' ')}
          >
            Register
          </button>
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
    </Fragment>
  )
}

export default Register