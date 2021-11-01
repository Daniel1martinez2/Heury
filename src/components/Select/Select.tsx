import React from 'react'
import {transformTypeToConstansCase} from '../../library/common/commonFunc'; 
import { nanoid } from 'nanoid'; 

export interface SelectInterface {
  value: string;
  onSetSelected: React.ChangeEventHandler<HTMLSelectElement>;
  selectData: string[]; 
  name: string; 
  className?: string;
  active: boolean;
  defaultValue?: string | null
}

const Select: React.FC<SelectInterface> = ({value,onSetSelected, selectData, name, className, active, defaultValue}) => {
  return (
    <select style={{color: active ? '#FF7451' : '#FAFAFE'}} className={className || ''} onChange={onSetSelected} value={value.split(' ').join('')} name={name}>
      <option value="">{defaultValue || 'All'}</option>
      {selectData.map(elem => <option key={nanoid() } value={elem}>{transformTypeToConstansCase(elem)}</option>)}
    </select>
  )
}

export default Select
