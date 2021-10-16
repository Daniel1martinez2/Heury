import React, {useState} from 'react'
import {ObservationType} from '../common/types'; 
import {testUsers} from '../common/commonData'; 
import ProjectContext from "./project-context";

const ProjectProvider = (props:any) => {
  const [filters, setFilters] = useState({heuristic:'', severity: ''}); 
  const [observationsData, setObservationsData] = useState<ObservationType[]> ([]); 
  
  const createObservation = (observation:ObservationType) => {
    setObservationsData(prev => [...prev, observation ]); 
  }; 

  const editObservation = ({newObservation, id}:{newObservation:ObservationType, id: string}) => {
    const currentObservation = observationsData.findIndex(elem => elem.id === id)
    const newDummyData = [...observationsData]; 
    newDummyData[currentObservation] = {...newObservation}; 
    setObservationsData(newDummyData); 
  }; 

  const deleteObservation = (id:string) => {
    setObservationsData(observationsData.filter(elem => elem.id !== id)); 
  }

  const setHeuristicFilter:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters(prev => ({...prev, heuristic: event.target.value})); 
  }

  const setSeverityFilter:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters(prev => ({...prev, severity: event.target.value})); 
  }

  const projectContextData = {
    filterData: filters,
    observationArray:observationsData, 
    deleteObservation, 
    editObservation, 
    createObservation, 
    setHeuristicFilter,
    setSeverityFilter,
    projectUsers: testUsers
  }; 
  return(
    <ProjectContext.Provider value={projectContextData}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider;





