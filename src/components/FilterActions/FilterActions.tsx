import React, {useContext} from 'react'; 
import ProjectContext from '../../store/project-context'; 
import styles from './FilterActions.module.css'; 
import Select from '../Select/Select'; 
import {severityData,heuristics, dropIn} from '../../library/common/commonData';
import {motion} from 'framer-motion'; 
import useClickOutside from '../../hooks/use-clickOutside'; 

interface FilterActionsInterface {
  setFilterActionVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterActions:React.FC<FilterActionsInterface> = ({setFilterActionVisible}) => {  
  const ctx = useContext(ProjectContext); 
  const {filterData, setHeuristicFilter, setSeverityFilter} = ctx; 
  const containerRef = useClickOutside(setFilterActionVisible); 

  return(
    <motion.div 
      ref={containerRef} 
      className={styles['filter-actions']}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <label  className={styles['heuristic']}>
        <span>Heuristic</span>
        <Select active ={filterData.heuristic !== ''} name= "heuristicFilter" selectData={heuristics} value={filterData.heuristic} onSetSelected={setHeuristicFilter} />
      </label>
      <label className={styles['severity']}>
        <span>Severity</span>
        <Select active ={filterData.severity !== ''} name="severityFilter" selectData={severityData} value={filterData.severity} onSetSelected={setSeverityFilter} />
      </label>
    </motion.div>
  );
}

export default FilterActions; 