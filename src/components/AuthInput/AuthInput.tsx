import React, {useState} from 'react';
import styles from './AuthInput.module.css'; 

interface AuthInputInterface {
  label: string;
  icon?: string;
  className?: string; 
  type: 'text' | 'password';
  placeholder: string;
  defaultText?: string; 
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;

}

const AuthInput: React.FC<AuthInputInterface> = ({label,icon,type,placeholder, className, defaultText, handleChange}) => {
  const defaultFunc = () => {}; 
  return (
    <label className={className || ''}>
      <span>{label}</span>
      <div className={styles['input-container']}>
        {icon && <img src={icon} alt="" />}
        <input 
          type={type} 
          placeholder={placeholder} 
          value={defaultText || ''}
          onChange={handleChange || defaultFunc} 
        />
      </div>
    </label>
  )
}

export default AuthInput
