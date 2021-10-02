import React from 'react'
import FIlterTable from './FilterTable'; 

interface TableActionsInterface {
  className: string; 
}

const TableActions:React.FC<TableActionsInterface> = ({className}) => {
  return (
    <section className={`${className}`}>
      <FIlterTable/>
    </section>
  )
}

export default TableActions
