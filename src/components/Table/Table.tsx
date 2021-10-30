import React, {Fragment, useState} from 'react'; 
import Observation from '../Observation/Observation'; 
import ModalScreen from '../../UI/ModalScreen/ModalScreen'; 
import styles from './Table.module.css'; 
import {transformTypeToConstansCase} from '../../library/common/commonFunc'; 
import {ObservationType} from '../../library/common/types'; 
import {AnimatePresence} from 'framer-motion'; 
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import FIlterTable from '../TableActions/FilterTable'; 

interface TableInterface {
  id: string;
  filterData: {
    heuristic: string;
    severity: string;
  }; 
  observations: ObservationType[]; 
}

const Table: React.FC <TableInterface> = ({id, filterData, observations}) => {
  
  const [showModal, setShowModal] = useState(false); 
  const condition = (elem:ObservationType) => {
    //improve 👀
    if (filterData.severity !== '' && filterData.heuristic !== ''){
      return (elem.severity === transformTypeToConstansCase(filterData.severity) && elem.severity !== '') && elem.heuristics.includes(transformTypeToConstansCase(filterData.heuristic)); 
    }else if(filterData.severity !== '' && filterData.heuristic === '' ){
      return (elem.severity === transformTypeToConstansCase(filterData.severity) && elem.severity !== '');  
    }else{
      return elem.heuristics.includes(transformTypeToConstansCase(filterData.heuristic)); 
    }
  };
  
  const dataArrayObservation = filterData.heuristic === '' && filterData.severity === ''? observations : observations.filter(elem => condition(elem));  

  const observationsComponent = dataArrayObservation.map((elem, index) => (
    <Observation 
      projectId={id}
      index={index+1} 
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
            <ModalOverlay projectId={id} setShowModal={setShowModal} />
          </ModalScreen>
        )}
      </AnimatePresence>
      {/* Actions */}
      <section className={styles["filter"]}>
        <FIlterTable/>
      </section>
      {/* Table */}
      <section className={styles["wrapper"]}>
        <div className={styles["table-container"]}>
          {/* Table itself */}
          <table className={styles["table"]}>
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
