import React, {useState} from 'react'
import {ObservationType, ProjectUserType, ProjectType } from '../library/common/types'; 
import {testUsers} from '../library/common/commonData'; 
import ProjectContext from "./project-context";

const ProjectProvider = (props:any) => {
  const [filters, setFilters] = useState({heuristic:'', severity: ''}); 
  // const [observationsData, setObservationsData] = useState<ObservationType[]> ([]); 
  const [projectUsers, setProjectUsers] = useState<ProjectUserType[]>(testUsers);
  const [projects, setProjects] = useState<ProjectType[]>([]); 

  //Create
  const createObservation = (observation:ObservationType, projectId: string) => {
    const projectsCopy = [...projects];
    const currentProject = projectsCopy.find( project => project.id === projectId); 
    currentProject?.observations.push(observation); 
    setProjects(projectsCopy)
    // setObservationsData(prev => [...prev, observation ]); 
  }; 

  const createProject = (project:ProjectType) => {
    setProjects(prev => [...prev, project ]); 
  }; 

  //Edit
  const editObservation = ({newObservation, id, projectId}:{newObservation:ObservationType, id: string, projectId: string}) => {
    const projectsCopy = [...projects];
    const currentProject = projectsCopy.find( project => project.id === projectId); 
    if (!!currentProject){
      const {observations} = currentProject
      const currentObservation = observations.findIndex(elem => elem.id === id)
      // const newDummyData = [...observations]; 
      observations[currentObservation] = {...newObservation}; 
      setProjects(projectsCopy); 
    }
  }; 

  //Delete
  const deleteObservation = (id:string, projectId: string) => {
    const projectsCopy = [...projects];
    const currentProject = projectsCopy.find( project => project.id === projectId); 
    if (!!currentProject){
      const {observations} = currentProject;
      currentProject.observations = observations.filter(elem => elem.id !== id);
      // observations = observations.filter(elem => elem.id !== id); 
      setProjects(projectsCopy); 
      // setObservationsData([...observationsData].filter(elem => elem.id !== id)); 
    }
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
    userProjects: projects,
    filterData: filters,
    // observationArray:observationsData, 
    deleteObservation, 
    editObservation, 
    createObservation, 
    setHeuristicFilter,
    setSeverityFilter,
    projectUsers, 
    deleteProjectUsers,
    createProject
  }; 
  return(
    <ProjectContext.Provider value={projectContextData}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider;





