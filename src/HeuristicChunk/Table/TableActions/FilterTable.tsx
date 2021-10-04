import React, {useState, useRef, useEffect, useContext} from 'react'; 
import ProjectContext from '../../../store/project-context'; 
import '../../../index.css'; 
import styles from './FilterTable.module.css'; 
import Select from '../../../Observation/ObservationForm/Select'; 
import {severityData,heuristics } from '../../../common/commonData';

interface FilterActionsInterface {
  setFilterActionVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterApply: React.Dispatch<React.SetStateAction<boolean>>; 
}

const FilterActions:React.FC<FilterActionsInterface> = ({setFilterActionVisible, setFilterApply}) => {  
  const ctx = useContext(ProjectContext); 
  const {filterData, setHeuristicFilter, setSeverityFilter} = ctx; 
  

  const containerRef = useRef<HTMLInputElement>(null); 
  // const [severity, setSeverity] = useState(''); 
  // const [heuristic, setHeuristic] = useState(''); 
  useEffect(()=>{
    if(filterData.heuristic !== '' || filterData.severity !== ''){
      setFilterApply(true)
    }else{
      setFilterApply(false)
    }; 
  }, [filterData.heuristic, filterData.severity, setFilterApply]); 
   
  // const onSetHeuristic:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
  //   setHeuristic(event.target.value); 
  // }; 

  // const onSetSeverity:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
  //   setSeverity(event.target.value);
  // }; 
  const handleClickOutside = (event:any) => {
    if(containerRef && containerRef.current && containerRef.current && !containerRef.current.contains(event.target)){
      setFilterActionVisible(false); 
    }
  }; 

  useEffect(()=>{
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  
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

const FilterTable = () => {
  const [filterActionVisible, setFilterActionVisible] = useState(false); 
  const [filterApply, setFilterApply] = useState(false);
  
  const handleButtonFilterClick = () => setFilterActionVisible(true);  

  return (
    <div className={styles["container"]}>
      <button  onClick={handleButtonFilterClick} className={`reset-btn ${styles['btn']} ${filterApply && styles['active']}`}>
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.318237 1.07813C0.318237 0.916509 0.380494 0.761512 0.491311 0.647232C0.602127 0.532952 0.752428 0.46875 0.909146 0.46875H15.091C15.2477 0.46875 15.398 0.532952 15.5088 0.647232C15.6196 0.761512 15.6819 0.916509 15.6819 1.07813V3.51563C15.6818 3.66591 15.628 3.81088 15.5306 3.92269L10.3637 9.84338V15.7031C10.3636 15.831 10.3245 15.9555 10.252 16.0592C10.1794 16.1629 10.0771 16.2404 9.95951 16.2808L6.41406 17.4996C6.32527 17.5301 6.23073 17.5384 6.13822 17.5238C6.04571 17.5093 5.95787 17.4723 5.88194 17.4159C5.80601 17.3594 5.74416 17.2853 5.70147 17.1994C5.65879 17.1135 5.63649 17.0184 5.63642 16.9219V9.84338L0.46951 3.92269C0.372138 3.81088 0.318263 3.66591 0.318237 3.51563V1.07813ZM1.50006 1.6875V3.28163L6.66696 9.20231C6.76434 9.31412 6.81821 9.45909 6.81824 9.60938V16.0761L9.18187 15.2644V9.60938C9.1819 9.45909 9.23577 9.31412 9.33315 9.20231L14.5001 3.28163V1.6875H1.50006Z" fill="#7F828F"/>
        </svg>
        <span>Filters</span>
      </button>
      {filterActionVisible && <FilterActions setFilterApply={setFilterApply} setFilterActionVisible={setFilterActionVisible}  />}
      
    </div>
  )
}

export default FilterTable
