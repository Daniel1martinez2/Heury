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
export const changeProjectId = (id: string, project: ProjectType) => {
  fetch(`https://heury-ef325-default-rtdb.firebaseio.com/projects/${id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...project, id}),
    headers:{'Content-Type': 'application/'}
  })
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
export const addObservationFirebase = (id: string, project: ProjectType, observation: ObservationType) => {
  const {observations} = project;
  // observations.push(observation); 
  fetch(`https://heury-ef325-default-rtdb.firebaseio.com/projects/${id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...project, observations}),
    headers:{'Content-Type': 'application/'}
  })
}

