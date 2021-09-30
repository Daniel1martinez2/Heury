import React, {useState} from 'react'
import {Heuristics} from '../../common/types'; 
import {transformTypeToConstansCase} from '../../common/commonFunc'; 

export interface test{
  name: string; 
  observationHeuristics: string[];
  validation: boolean; 
  onEditCheckBoxArray: any; 
}; 

const CheckInput: React.FC<test> = ({name, observationHeuristics, validation, onEditCheckBoxArray}) => {
  const [checked, setChecked] = useState(observationHeuristics.includes(name))
  // const [checked, setChecked] = useState(false)
  const toggleCheckboxChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.target.checked)
    onEditCheckBoxArray(name); 
    // setChecked((prev) => !prev );
  }
  return (
    <label>
      <input onChange={toggleCheckboxChange} checked={checked} type="checkbox" name={name}/>
      <span>{transformTypeToConstansCase(name).toLowerCase()} {validation}</span>
    </label>
  )
}

export default CheckInput; 
