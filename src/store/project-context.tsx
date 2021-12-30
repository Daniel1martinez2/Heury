import React from "react";

import { ObservationType, ProjectType, ProjectUserType, UserFirebase } from "../library/common/types";

type editObservationType = {
  newObservation: ObservationType;
  id: string;
  projectId: string;
}

type dataContext = {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string, expirationTime: string, userMail: string) => void;
  logout: () => void;
  user: UserFirebase | null; 
  setUserHandler: (user: UserFirebase) => void;
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
  loading: boolean;
};

const ProjectContext = React.createContext<dataContext>({
  token: '',
  isLoggedIn: false,
  loading: false,
  login: () => {},
  logout: () => {},
  user: null,
  setUserHandler: () => {},
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
