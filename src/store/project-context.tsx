import React from "react";

import { ObservationType, ProjectUserType, User, ProjectType } from "../library/common/types";

type editObservationType = {
  newObservation: ObservationType;
  id: string;
}


type dataContext = {
  user: User; 
  userProjects: ProjectType[];
  observationArray: ObservationType[];
  projectUsers: ProjectUserType[];
  filterData: {heuristic: string, severity: string};
  createObservation: (observation: ObservationType) => void;
  editObservation: ({newObservation, id}:editObservationType ) => void;
  deleteObservation: (id: string) => void;
  setHeuristicFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
  setSeverityFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
  deleteProjectUsers: (id:string)=>void; 

};

const ProjectContext = React.createContext<dataContext>({
  user: {name: '', id: '', profileImg: ''},
  userProjects: [],
  projectUsers:[],
  deleteProjectUsers: () => {},
  observationArray: [],
  filterData: {heuristic:'', severity: ''},
  deleteObservation: () => {},
  editObservation: () => {},
  createObservation: () => {},
  setHeuristicFilter: () => {},
  setSeverityFilter: () => {},
});

export default ProjectContext;
