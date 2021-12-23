import { ProjectType, ObservationType, UserFirebase } from "../library/common/types";
import { apiToken } from '../utils/tokens'; 

//Get projects from firebase
export const getProjectsFirebase = async () => {
  const raw = await fetch(`${ apiToken }/projects.json/`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const data = await raw.json(); 
  return data; 
}

//Get projects from firebase
export const getUserProjectsFirebase = async (user: UserFirebase) => {
  const {projectsIds} = user; 
  let projectsIdsArray: string[] = projectsIds || []; 
  const loadedProjects: ProjectType[] = [];
  const raw = await fetch(`${ apiToken }/projects.json/`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const data = await raw.json();

  for (const key in data) {
    if(data[key].observations){
      loadedProjects.push(data[key]); 
    } else{
      loadedProjects.push({...data[key], observations:[]}); 
    }
  } 
  console.log(loadedProjects, projectsIdsArray, user);
  return loadedProjects.filter( project => projectsIdsArray.includes(project.id)); 
}

//Post project 
export const postProjectToFirebase = async (project: ProjectType) => {
  const raw = await fetch(`${ apiToken }/projects.json/`, {
    method: 'POST',
    body:JSON.stringify(project),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const data = await raw.json();  
  return data; 
}

export const addProjectIdTOUserProjectList = async (user: UserFirebase, projectId: string) => {
  const {projectsIds} = user; 
  const projectsIdCopy = [...projectsIds, projectId]; 
  

  const raw = await fetch(`${ apiToken }/users/${user.id}.json/`, {
    method: 'PUT',
    body:JSON.stringify({...user, projectsIds: projectsIdCopy}),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const data = await raw.json();  
  return data; 
}

//Post user
export const addUserRefToFirebase = async (user: UserFirebase) => {
  const raw = await fetch(`${ apiToken }/users.json/`, {
    method: 'POST',
    body:JSON.stringify(user),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const data = await raw.json(); 

  fetch(`${apiToken}/users/${data.name}.json`, {
    method: 'PUT',
    body:JSON.stringify({...user, id: data.name}),
    headers:{'Content-Type': 'application/'}
  })
  
  return data; 
}

// Set the project id
export const changeProjectId = async (id: string, project: ProjectType) => {
  const raw = await fetch(`${apiToken}/projects/${id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...project, id}),
    headers:{'Content-Type': 'application/'}
  })
  const data = raw.json(); 
  return data; 
}

//Set the project name
export const changeProjectName = (id: string, project: ProjectType, name: string) => {
  fetch(`${ apiToken }/projects/${id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...project, name}),
    headers:{'Content-Type': 'application/'}
  })
}

//Delete project
export const deleteProjectFirebase = (id: string) => {
  fetch(`${apiToken}/projects/${id}.json`, {
    method: 'DELETE',
    headers:{'Content-Type': 'application/'}
  })
}

//Delete project from user reference

export const deleteProjectFromUserRef = async (user: UserFirebase, projectId: string) => {
  const raw = await fetch(`${apiToken}/users/${user.id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...user, projectsIds: user.projectsIds.filter(p => p !== projectId)}),
    headers:{'Content-Type': 'application/'}
  })
  const data = raw.json(); 
  return data; 
}

//Set observation
export const SetObservationFirebase = (id: string, project: ProjectType, observations:ObservationType[] ) => {
  
  fetch(`${apiToken}/projects/${id}.json`, {
    method: 'PUT',
    body:JSON.stringify({...project, observations}),
    headers:{'Content-Type': 'application/'}
  })
}


// Get users
export const getUsers = async () => {
  const raw = await fetch(`${ apiToken }/users.json/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'}
  })
  const users:UserFirebase[] = await raw.json(); 
  console.log(users, '✨');
  return users; 
}

export const findUserByMail = async (mail: string) => {
  const users = await getUsers(); 
  const loadedUsers: UserFirebase[] = [];
  for (const key in users) {
    loadedUsers.push(users[key]); 
  } 
  return loadedUsers.find( user => user.mail === mail);
}