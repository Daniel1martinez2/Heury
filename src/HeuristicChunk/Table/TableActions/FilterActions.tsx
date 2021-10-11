import React, {useRef, useEffect, useContext, useCallback} from 'react'; 
import ProjectContext from '../../../store/project-context'; 
import styles from './FilterTable.module.css'; 
import Select from '../../../Observation/ObservationForm/Select'; 
import {severityData,heuristics } from '../../../common/commonData';

interface FilterActionsInterface {
  setFilterActionVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterActions:React.FC<FilterActionsInterface> = ({setFilterActionVisible}) => {  
  const ctx = useContext(ProjectContext); 
  const {filterData, setHeuristicFilter, setSeverityFilter} = ctx; 
  
  const containerRef = useRef<HTMLDivElement>(null); 
   
  const handleClickOutside = useCallback((event) => {
    if(containerRef && containerRef.current && containerRef.current && !containerRef.current.contains(event.target)){
      setFilterActionVisible(false); 
    }
  }, [setFilterActionVisible]); 

  useEffect(()=>{
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);
  
  return(
    <div ref={containerRef} className={styles['filter-actions']}>
      <label  className={styles['heuristic']}>
        <span>Heuristic</span>
        <Select active ={filterData.heuristic !== ''} name= "heuristicFilter" selectData={heuristics} value={filterData.heuristic} onSetSelected={setHeuristicFilter} />
      </label>
      <label className={styles['severity']}>
        <span>Severity</span>
        <Select active ={filterData.severity !== ''} name="severityFilter" selectData={severityData} value={filterData.severity} onSetSelected={setSeverityFilter} />
      </label>
    </div>
  );
}

export default FilterActions; 