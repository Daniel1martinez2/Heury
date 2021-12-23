import React from "react";

import { ObservationType, User, ProjectType, ProjectUserType } from "../library/common/types";

type editObservationType = {
  newObservation: ObservationType;
  id: string;
  projectId: string;
}

type dataContext = {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  user: User; 
  userProjects: ProjectType[];
  filterData: {heuristic: string, severity: string};
  createObservation: (observation: ObservationType, projectId: string) => void;
  setProjectName: (projectId: string, name: string) => void;
  editObservation: ({newObservation, id, projectId}:editObservationType ) => void;
  deleteObservation: (id: string, projectId: string) => void;
  setHeuristicFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
  setSeverityFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
  deleteProjectUsers: (id:string, projectId: string)=>void; 
  deleteProject: (projectId: string) => void; 
  createProject: (project:ProjectType, callback: (newId: string) => void) => void;
  setProjectCover: (projectId: string, image: string) => void;
  addUsersProject: (projectId: string, project:ProjectUserType[]) => void; 
};

const ProjectContext = React.createContext<dataContext>({
  token: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  
  user: {name: '', id: '', profileImg: ''},
  deleteProject: () => {},
  userProjects: [],
  setProjectName: ()=>{},
  deleteProjectUsers: () => {},
  filterData: {heuristic:'', severity: ''},
  deleteObservation: () => {},
  editObservation: () => {},
  createObservation: () => {},
  setHeuristicFilter: () => {},
  setSeverityFilter: () => {},
  createProject: () => {},
  setProjectCover: () => {},
  addUsersProject: () => {}
});

export default ProjectContext;
