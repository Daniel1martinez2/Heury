import React, {Fragment, useState, useContext} from 'react'; 
import ProjectContext from '../../store/project-context';

import Observation from '../../Observation/Observation'; 
import ModalScreen from '../../UI/ModalScreen/ModalScreen'; 
import TableActions from './TableActions/TableActions'
import styles from './Table.module.css'; 
import {transformTypeToConstansCase} from '../../common/commonFunc'; 
import {ObservationType} from '../../common/types'; 
import {AnimatePresence} from 'framer-motion'; 
import ModalOverlay from '../../Observation/ObservationForm/ModalOverlay';


const Table = () => {
  // 🔥
  const ctx = useContext(ProjectContext); 
  const {observationArray, createObservation, editObservation, deleteObservation, filterData} = ctx; 
  const [showModal, setShowModal] = useState(false); 

  const condition = (elem:ObservationType) => {
    if (filterData.severity !== '' && filterData.heuristic !== ''){
      return (elem.severity === transformTypeToConstansCase(filterData.severity) && elem.severity !== '') && elem.heuristics.includes(transformTypeToConstansCase(filterData.heuristic)); 
    }else if(filterData.severity !== '' && filterData.heuristic === '' ){
      return (elem.severity === transformTypeToConstansCase(filterData.severity) && elem.severity !== '');  
    }else{
      return elem.heuristics.includes(transformTypeToConstansCase(filterData.heuristic)); 
    }
  };
  
  let dataArrayObservation = observationArray; 
  if(filterData.heuristic === '' && filterData.severity === ''){
    dataArrayObservation = observationArray;
  }else{
    dataArrayObservation = observationArray.filter(elem => condition(elem)); 
  }; 

  const observationsComponent = dataArrayObservation.map((elem, index) => (
    <Observation 
      onDeleteObservation={deleteObservation} 
      index={index+1} 
      onSetObservation={editObservation} 
      key={Math.random()} 
      observationData={elem}
    />
  ));

  return (
    <Fragment>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
      >
        {showModal && (
          <ModalScreen setShowModal={setShowModal}>
            <ModalOverlay onAddObservation={createObservation} setShowModal={setShowModal} />
          </ModalScreen>
        )}
      </AnimatePresence>
      {/* Actions */}
      <TableActions className={styles["filter"]}/>
      {/* Table */}
      <section className={styles["wrapper"]}>
        <div className={styles["table-container"]}>
          {/* Table itself */}
          <table>
            <thead>
              <tr>
                <th className={styles["first"]}>#</th>
                <th>Notes</th>
                <th>Heuristic</th>
                <th>Severity</th>
                <th>Evidence</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {/* Observations */}
              {observationsComponent}
            </tbody>
          </table>
          <div className={styles["btn-container"]}>
            <button onClick={() => setShowModal(true)} >New Observation</button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Table; 
