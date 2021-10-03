import React from 'react'
import {transformTypeToConstansCase} from '../../common/commonFunc'; 

export interface SelectInterface {
  value: string;
  onSetSelected: React.ChangeEventHandler<HTMLSelectElement>;
  selectData: string[]; 
  name: string; 
  className?: string;
  active: boolean;
}

const Select: React.FC<SelectInterface> = ({value,onSetSelected, selectData, name, className, active}) => {
  
  return (
    <select style={{color: active ? '#FF7451' : '#FAFAFE'}} className={className || ''} onChange={onSetSelected} value={value.split(' ').join('')} name={name}>
      <option value="">--Please choose an option--</option>
      {selectData.map(elem => <option key={Math.random().toString() } value={elem}>{transformTypeToConstansCase(elem)}</option>)}
    </select>
  )
}

export default Select
