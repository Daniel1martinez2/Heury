import { ProjectType, ObservationType } from "../library/common/types";

//Get projects from
export const getProjectsFirebase = async () => {
  const raw = await fetch('https://heury-ef325-default-rtdb.firebaseio.com/projects.json/', {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const data = await raw.json(); 
  return data; 
}

//Post project 
export const postProjectToFirebase = async (project: ProjectType) => {
  const raw = await fetch('https://heury-ef325-default-rtdb.firebaseio.com/projects.json/', {
    method: 'POST',
    body:JSON.stringify(project),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const data = await raw.json(); 
  return data; 
}


// Set the project id
export const changeProjectId = async (id: string, project: ProjectType) => {
  const raw = await fetch(`https://heury-ef325-default-rtdb.firebaseio.com/projects/${id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...project, id}),
    headers:{'Content-Type': 'application/'}
  })
  const data = raw.json(); 
  return data; 
}

//Set the project name
export const changeProjectName = (id: string, project: ProjectType, name: string) => {
  fetch(`https://heury-ef325-default-rtdb.firebaseio.com/projects/${id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...project, name}),
    headers:{'Content-Type': 'application/'}
  })
}

//Delete project
export const deleteProjectFirebase = (id: string) => {
  fetch(`https://heury-ef325-default-rtdb.firebaseio.com/projects/${id}.json`, {
    method: 'DELETE',
    headers:{'Content-Type': 'application/'}
  })
}

//Set observation
export const SetObservationFirebase = (id: string, project: ProjectType, observations:ObservationType[] ) => {
  
  fetch(`https://heury-ef325-default-rtdb.firebaseio.com/projects/${id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...project, observations}),
    headers:{'Content-Type': 'application/'}
  })
}
