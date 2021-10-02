import React, {Fragment, useState} from 'react'

import Observation from '../../Observation/Observation'; 
import ObservationForm from '../../Observation/ObservationForm/ObservationForm'; 
import TableActions from './TableActions/TableActions'
import {ObservationType} from '../../common/types';
import styles from './Table.module.css'; 


export default function Table() {

  const [showModal, setShowModal] = useState(false); 
  const [DUMMY_OBSERVATIONS, setDUMMY_OBSERVATIONS] = useState<ObservationType[]> ([]); 

  const onAddObservation = (observation:ObservationType) => {
    setDUMMY_OBSERVATIONS(prev => [...prev, observation ]); 
  }
  const onSetObservation = ({newObservation, id}:{newObservation:ObservationType, id: string}) => {
    const currentObservation = DUMMY_OBSERVATIONS.findIndex(elem => elem.id === id)
    const newDummyData = DUMMY_OBSERVATIONS; 
    newDummyData[currentObservation] = {...newObservation}; 
    setDUMMY_OBSERVATIONS([...newDummyData]); 
  }
  const onDeleteObservation = (id:string) => {
    console.log('delete');
    console.log(DUMMY_OBSERVATIONS, id);
    setDUMMY_OBSERVATIONS(DUMMY_OBSERVATIONS.filter(elem => elem.id !== id)); 
  }

  return (
    <Fragment>
      {showModal && <ObservationForm onAddObservation={onAddObservation} setShowModal={setShowModal} />}
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
              {DUMMY_OBSERVATIONS.map((elem, index) => (
                <Observation onDeleteObservation={onDeleteObservation} index={index+1} onSetObservation={onSetObservation} key={Math.random()} observationData={elem}/>
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
