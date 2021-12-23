import React from 'react';
import styles from './AuthInput.module.css'; 

interface AuthInputInterface {
  label: string;
  icon?: string;
  className?: string; 
  type: 'text' | 'password';
  placeholder: string;
  defaultText?: string;
  error?: string;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;

}

const AuthInput: React.FC<AuthInputInterface> = ({error, label,icon,type,placeholder, className, defaultText, handleChange}) => {
  const defaultFunc = () => {};
  const handleErrorMsg = () => {
    if(error) return error.trim() !== '';
  }
  const handleErrorClass = () => {
    if(error && error.trim() !== ''){
      return [className || '', styles['error']].join(' ')
    }
    return className || '';
  }
  return (
    <label className={handleErrorClass()}>
      <span>{handleErrorMsg()? error : label }</span>
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
