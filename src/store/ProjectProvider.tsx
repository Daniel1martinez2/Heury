import React, {useState} from 'react'
import {ObservationType, ProjectUserType, ProjectType } from '../library/common/types'; 
import {testUsers} from '../library/common/commonData'; 
import ProjectContext from "./project-context";

const ProjectProvider = (props:any) => {
  const [filters, setFilters] = useState({heuristic:'', severity: ''}); 
  const [observationsData, setObservationsData] = useState<ObservationType[]> ([]); 
  const [projectUsers, setProjectUsers] = useState<ProjectUserType[]>(testUsers);
  const [projects, setProjects] = useState<ProjectType[]>([]); 

  //Create
  const createObservation = (observation:ObservationType) => {
    setObservationsData(prev => [...prev, observation ]); 
  }; 

  const createProject = (project:ProjectType) => {
    setProjects(prev => [...prev, project ]); 
  }; 

  //Edit
  const editObservation = ({newObservation, id}:{newObservation:ObservationType, id: string}) => {
    const currentObservation = observationsData.findIndex(elem => elem.id === id)
    const newDummyData = [...observationsData]; 
    newDummyData[currentObservation] = {...newObservation}; 
    setObservationsData(newDummyData); 
  }; 

  //Delete
  const deleteObservation = (id:string) => {
    setObservationsData([...observationsData].filter(elem => elem.id !== id)); 
  }

  const deleteProjectUsers = (id: string) => {
    setProjectUsers([...projectUsers].filter(elem => elem.id !== id));
  }

  //Other
  const setHeuristicFilter:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters(prev => ({...prev, heuristic: event.target.value})); 
  }

  const setSeverityFilter:React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFilters(prev => ({...prev, severity: event.target.value})); 
  }
  
  const projectContextData = {
    user: {name: 'Daniel', id: 'asdsad', profileImg: 'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9iMDVhNWNjMDY1M2FiNDNjNzU0NjY1ZmQxOWNmNzU3MT9zaXplPTEwMCZkZWZhdWx0PXJldHJvIn0.AUtQ0KIK-lJbX9MAPyq_8rTlkO4_CiuhTGbmyvuJJ40'},
    userProjects: [],
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





