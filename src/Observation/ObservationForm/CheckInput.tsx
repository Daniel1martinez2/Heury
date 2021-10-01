import React from 'react'
import {CheckInputInterface} from '../../common/types'; 
import {transformTypeToConstansCase,normalizeText} from '../../common/commonFunc'; 

const CheckInput: React.FC<CheckInputInterface> = ({name, validation, onEditCheckBoxArray}) => {
  const toggleCheckboxChange:React.ChangeEventHandler<HTMLInputElement> = () => onEditCheckBoxArray(name); 
  return (
    <label>
      <input onChange={toggleCheckboxChange} checked={validation} type="checkbox" name={name}/>
      <span>{normalizeText(transformTypeToConstansCase(name).toLowerCase())} {validation}</span>
    </label>
  )
}

export default CheckInput; 
