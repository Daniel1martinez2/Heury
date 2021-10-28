import React from 'react';
import styles from './AuthInput.module.css'; 

interface AuthInputInterface {
  label: string;
  icon: string;
  type: 'text' | 'password';
  placeholder: string;

}

const AuthInput: React.FC<AuthInputInterface> = ({label,icon,type,placeholder}) => {
  return (
    <label >
      <span>{label}</span>
      <div className={styles['input-container']}>
        <img src={icon} alt="" />
        <input type={type} placeholder={placeholder} />
      </div>
    </label>
  )
}

export default AuthInput
