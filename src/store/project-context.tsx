import React from "react";

import { ObservationType, ProjectUserType, User, ProjectType } from "../library/common/types";

type editObservationType = {
  newObservation: ObservationType;
  id: string;
  projectId: string;
}

type dataContext = {
  user: User; 
  userProjects: ProjectType[];
  // observationArray: ObservationType[];
  projectUsers: ProjectUserType[];
  filterData: {heuristic: string, severity: string};
  createObservation: (observation: ObservationType, projectId: string) => void;
  editObservation: ({newObservation, id, projectId}:editObservationType ) => void;
  deleteObservation: (id: string, projectId: string) => void;
  setHeuristicFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
  setSeverityFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
  deleteProjectUsers: (id:string)=>void; 
  createProject: (project:ProjectType) => void;
};

const ProjectContext = React.createContext<dataContext>({
  user: {name: '', id: '', profileImg: ''},
  userProjects: [],
  projectUsers:[],
  deleteProjectUsers: () => {},
  // observationArray: [],
  filterData: {heuristic:'', severity: ''},
  deleteObservation: () => {},
  editObservation: () => {},
  createObservation: () => {},
  setHeuristicFilter: () => {},
  setSeverityFilter: () => {},
  createProject: () => {}
});

export default ProjectContext;
