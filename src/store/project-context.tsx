import React from "react";

import { ObservationType, projectUserType } from "../common/types";

type editObservationType = {
  newObservation: ObservationType;
  id: string;
}



type dataContext = {
  observationArray: ObservationType[];
  projectUsers: projectUserType[];
  filterData: {heuristic: string, severity: string};
  createObservation: (observation: ObservationType) => void;
  editObservation: ({newObservation, id}:editObservationType ) => void;
  deleteObservation: (id: string) => void;
  setHeuristicFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
  setSeverityFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void; 
};

const ProjectContext = React.createContext<dataContext>({
  projectUsers:[],
  observationArray: [],
  filterData: {heuristic:'', severity: ''},
  deleteObservation: () => {},
  editObservation: () => {},
  createObservation: () => {},
  setHeuristicFilter: () => {},
  setSeverityFilter: () => {},
});

export default ProjectContext;
