import React from 'react'
import {transformTypeToConstansCase} from '../../common/commonFunc'; 

export interface SelectInterface {
  severity: string;
  onSetSelected: React.ChangeEventHandler<HTMLSelectElement>;
  selectData: string[]; 
  name: string; 
}

const Select: React.FC<SelectInterface> = ({severity,onSetSelected, selectData, name}) => {
  
  return (
    <select onChange={onSetSelected} value={severity.split(' ').join('')} name={name}>
      <option value="">--Please choose an option--</option>
      {selectData.map(elem => <option key={Math.random().toString() } value={elem}>{transformTypeToConstansCase(elem)}</option>)}
    </select>
  )
}

export default Select
