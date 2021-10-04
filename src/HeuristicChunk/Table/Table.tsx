import React, {Fragment, useState, useContext} from 'react'; 
import ProjectContext from '../../store/project-context';

import Observation from '../../Observation/Observation'; 
import ObservationForm from '../../Observation/ObservationForm/ObservationForm'; 
import TableActions from './TableActions/TableActions'
import styles from './Table.module.css'; 


export default function Table() {
  // 🔥
  const ctx = useContext(ProjectContext); 
  const {observationArray, createObservation, editObservation, deleteObservation} = ctx; 
  const [showModal, setShowModal] = useState(false); 
  
  return (
    <Fragment>
      {showModal && <ObservationForm onAddObservation={createObservation} setShowModal={setShowModal} />}
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
              {observationArray.map((elem, index) => (
                <Observation onDeleteObservation={deleteObservation} index={index+1} onSetObservation={editObservation} key={Math.random()} observationData={elem}/>
              ))}
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
