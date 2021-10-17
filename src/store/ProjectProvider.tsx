import React, {useState} from 'react'
import {ObservationType, ProjectUserType} from '../common/types'; 
import {testUsers} from '../common/commonData'; 
import ProjectContext from "./project-context";

const ProjectProvider = (props:any) => {
  const [filters, setFilters] = useState({heuristic:'', severity: ''}); 
  const [observationsData, setObservationsData] = useState<ObservationType[]> ([]); 
  const [projectUsers, setProjectUsers] = useState<ProjectUserType[]>(testUsers)

  const createObservation = (observation:ObservationType) => {
    setObservationsData(prev => [...prev, observation ]); 
  }; 
  
  // type DeleteListElemType = {
  //   prevData: ObservationType[];
  //   id: string; 
  //   setFunc: (value: React.SetStateAction<ObservationType[]>) => void ;
  // }|{
  //   prevData: ProjectUserType[];
  //   id: string; 
  //   setFunc: (value: React.SetStateAction<ProjectUserType[]> ) => void ;
  // }

  // const deleteListElem = ({id, setFunc, prevData}:DeleteListElemType) => {
  //   setFunc([...prevData].filter(elem => elem.id !== id)); 
  // }

  const editObservation = ({newObservation, id}:{newObservation:ObservationType, id: string}) => {
    const currentObservation = observationsData.findIndex(elem => elem.id === id)
    const newDummyData = [...observationsData]; 
    newDummyData[currentObservation] = {...newObservation}; 
    setObservationsData(newDummyData); 
  }; 

  const deleteObservation = (id:string) => {
    setObservationsData([...observationsData].filter(elem => elem.id !== id)); 
  }

  const setHeuristicFilter:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters(prev => ({...prev, heuristic: event.target.value})); 
  }

  const setSeverityFilter:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters(prev => ({...prev, severity: event.target.value})); 
  }

  const deleteProjectUsers = (id: string) => {
    setProjectUsers([...projectUsers].filter(elem => elem.id !== id));
  }

  const projectContextData = {
    filterData: filters,
    observationArray:observationsData, 
    deleteObservation, 
    editObservation, 
    createObservation, 
    setHeuristicFilter,
    setSeverityFilter,
    projectUsers, 
    deleteProjectUsers
  }; 
  return(
    <ProjectContext.Provider value={projectContextData}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider;





