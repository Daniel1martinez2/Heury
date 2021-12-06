import {ProjectType} from '../library/common/types'; 
const apiBase = 'http://localhost:3333'; 
const getProjectsRoute = '/projects'; 

// Get projects
export const getProjects = async () => {
  const raw = await fetch(`${apiBase}${getProjectsRoute}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'}
  })
  const projects:ProjectType[] = await raw.json(); 
  return projects; 
}

// Get projects
export const addNewProject = async (project:ProjectType ) => {
  const raw = await fetch(`${apiBase}${getProjectsRoute}`, {
    method: 'POST',
    body:JSON.stringify(project), 
    headers: { 'Content-Type': 'application/json'}
  })
  const data: {
    status: 'ok'|'error',
    message?: '',
    newProject?: ProjectType,
  } = await raw.json();
  return data;
}

// Get projects
export const deleteServerProject = async (projectId: string ) => {
  const raw = await fetch(`${apiBase}${getProjectsRoute}`, {
    method: 'DELETE',
    body:JSON.stringify({projectId}), 
    headers: { 'Content-Type': 'application/json'}
  })
  const data: {
    status: 'ok'|'error',
    message?: '',
    deletedProject?: string,
  } = await raw.json();
  return data; 
}