import React, {useState} from 'react'
import {ObservationType} from '../common/types'; 
import ProjectContext from "./project-context";

const ProjectProvider = (props:any) => {
  const [observationsData, setObservationsData] = useState<ObservationType[]> ([
    // {
    //   index: 1,
    //   notes: 'alo',
    //   heuristics: ['HelpRecognizeAndRecoverFromErrors'],
    //   severity: '4Major',
    //   evidence: '', 
    //   recommendations: 'be You', 
    //   id: '3290820840293', 
    // }
  ]); 
  
  const createObservation = (observation:ObservationType) => {
    setObservationsData(prev => [...prev, observation ]); 
  }; 

  const editObservation = ({newObservation, id}:{newObservation:ObservationType, id: string}) => {
    const currentObservation = observationsData.findIndex(elem => elem.id === id)
    const newDummyData = observationsData; 
    newDummyData[currentObservation] = {...newObservation}; 
    setObservationsData([...newDummyData]); 
  }; 

  const deleteObservation = (id:string) => {
    setObservationsData(observationsData.filter(elem => elem.id !== id)); 
  }


  const projectContextData = {
    observationArray:observationsData, 
    deleteObservation, 
    editObservation, 
    createObservation, 
  }; 
  return(
    <ProjectContext.Provider value={projectContextData}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider;





