import React from 'react'

export interface SelectInterface {
  severity: string;
  onSetSeverity: React.ChangeEventHandler<HTMLSelectElement>;
  severityData: string[]; 
}

const Select: React.FC<SelectInterface> = ({severity,onSetSeverity, severityData}) => {
  return (
    <select onChange={onSetSeverity} value={severity.split(' ').join('-')} name="severity">
      <option value="">--Please choose an option--</option>
      {severityData.map(elem => <option key={Math.random().toString() } value={elem}>{elem.split('-').join(' ')}</option>)}
    </select>
  )
}

export default Select
