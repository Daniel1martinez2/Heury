import React, {useEffect, useState} from 'react'
import {ObservationType, ProjectType, ProjectUserType } from '../library/common/types'; 
// import { addNewProject, deleteServerProject, getProjects } from '../utils/api';
import ProjectContext from "./project-context";
import { 
  getProjectsFirebase, 
  postProjectToFirebase, 
  changeProjectId, 
  changeProjectName,
  deleteProjectFirebase,
  SetObservationFirebase
} from '../utils/apiFIrebase'; 

const ProjectProvider = (props:any) => {
  const [filters, setFilters] = useState({heuristic:'', severity: ''}); 
  const [projects, setProjects] = useState<ProjectType[]>([]);

  
  useEffect(() => {

    const loadedProjects: ProjectType[] = [];
    getProjectsFirebase()
    .then( data => {
      for (const key in data) {
        if(data[key].observations){
          loadedProjects.push(data[key]); 
        } else{
          loadedProjects.push({...data[key], observations:[]}); 
        }
      }      
      setProjects(loadedProjects);
    });


    
  }, []);
  
  const checkProjectCurrent = (projectId: string) => {
    const projectsCopy = [...projects];
    const currentProject = projectsCopy.find( project => project.id === projectId); 
    return {currentProject, projectsCopy} 
  }

  //Create
  //----------------------------------------------------------------
  //----------------------------------------------------------------
  const createObservation = (observation:ObservationType, projectId: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId)
    currentProject?.observations.push(observation); 
    setProjects(projectsCopy);
    console.log(projectId);
    if(currentProject) SetObservationFirebase(projectId, currentProject, currentProject.observations);
  }; 

  const createProject = (project:ProjectType, callback: (newID:string) => void ) => {
    // setProjects(prev => [...prev, project ]);
    const loadedProjects: ProjectType[] = []; 

    postProjectToFirebase(project)
    .then( dataID => {
      console.log(dataID);
      //data.name --> contains the project id
      changeProjectId(dataID.name, project)
      
      
      getProjectsFirebase()
      .then( data => {
        for (const key in data) {
          loadedProjects.push({...data[key], observations:[]}); 
        }
        const current = loadedProjects.findIndex(p => p.id === project.id); 
        loadedProjects[current].id = dataID.name;
        console.log(current);
        console.log(loadedProjects);
        setProjects(loadedProjects);
        callback(dataID.name);
      });
    }); 
    
  };

  const addUsersProject = (projectId: string, users: ProjectUserType[]) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId); 
    if (!!currentProject){
      currentProject.users.push(...users); 
      setProjects(projectsCopy); 
    }
  }

  //Edit
  const editObservation = ({newObservation, id, projectId}:{newObservation:ObservationType, id: string, projectId: string}) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId)
    if (!!currentProject){
      const {observations} = currentProject
      const currentObservation = observations.findIndex(elem => elem.id === id)
      observations[currentObservation] = {...newObservation}; 
      SetObservationFirebase(projectId, currentProject, observations)
      setProjects(projectsCopy);
    }
  }; 

  const setProjectName = (projectId: string, name: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId);
    if(!!currentProject){
      currentProject.name = name
      setProjects(projectsCopy); 
      changeProjectName(currentProject.id, currentProject, name); 

    }
  };
  const setProjectCover = (projectId:string, img: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId);
    if(!!currentProject){
      currentProject.coverImage = img; 
      setProjects(projectsCopy); 
    }
  }

  //DELETE ⚠️
  const deleteObservation = (id:string, projectId: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId)
    if (!!currentProject){
      const {observations} = currentProject;
      currentProject.observations = observations.filter(elem => elem.id !== id);
      setProjects(projectsCopy); 
    }
  }

  const deleteProject = (projectId: string) => {
    // deleteServerProject(projectId).then(data => console.log(data, '🔥')); 
    setProjects(prev => prev.filter(project => project.id !== projectId)); 
    deleteProjectFirebase(projectId); 
  }

  const deleteProjectUsers = (userId: string, projectId: string) => {
    const {currentProject, projectsCopy} = checkProjectCurrent(projectId); 
    if (!!currentProject){
      const {users} = currentProject; 
      currentProject.users = users.filter(elem => elem.id !== userId); 
      setProjects(projectsCopy);
    }
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
    deleteObservation, 
    editObservation, 
    setProjectName,
    createObservation, 
    setHeuristicFilter,
    setSeverityFilter,
    deleteProjectUsers,
    deleteProject,
    createProject,
    setProjectCover,
    addUsersProject
  }; 
  return(
    <ProjectContext.Provider value={projectContextData}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default React.memo(ProjectProvider);





