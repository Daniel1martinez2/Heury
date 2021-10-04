import React from "react";

import { ObservationType } from "../common/types";

type editObservationType = {
  newObservation: ObservationType;
  id: string;
}

type dataContext = {
  observationArray: ObservationType[];
  createObservation: (observation: ObservationType) => void;
  editObservation: ({newObservation, id}:editObservationType ) => void;
  deleteObservation: (id: string) => void;
};

const ProjectContext = React.createContext<dataContext>({
  observationArray: [],
  deleteObservation: () => {},
  editObservation: () => {},
  createObservation: () => {},
});

export default ProjectContext;
