import React, {Fragment, useState} from 'react'
import styles from './Observation.module.css'; 
import ModalCard from '../UI/ModalCard'; 
import ObservationForm from './ObservationForm/ObservationForm'; 
import '../index.css';
import {ObservationInterface} from '../common/types'; 
import {severityColor} from '../common/commonData'; 
import {normalizeText} from '../common/commonFunc'; 

const Observation:React.FC<ObservationInterface> = ({observationData, onSetObservation, index,onDeleteObservation}) =>{
  const [actionsActive, setActionsActive] = useState(true); 
  const [showModal, setShowModal] = useState(false); 

  const setSeverityColor = (severity:string) => {
    return severityColor[parseInt(severity.split(' ')[0])-1]; 
  }
  return (
    <Fragment>
      {showModal && <ObservationForm onSetObservation={onSetObservation} editData={observationData} setShowModal={setShowModal} />}
      <tr>
        <th className={styles["t-header"]} >
          <h3>{index}</h3>
          <button 
            onBlur={() => setActionsActive(true)} 
            onClick={() => setActionsActive(false)} 
            className={`${styles["transparent"]} ${styles["more"]}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5C2.60218 9.5 2.22064 9.34196 1.93934 9.06066C1.65804 8.77936 1.5 8.39782 1.5 8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5C3.39782 6.5 3.77936 6.65804 4.06066 6.93934C4.34196 7.22064 4.5 7.60218 4.5 8C4.5 8.39782 4.34196 8.77936 4.06066 9.06066C3.77936 9.34196 3.39782 9.5 3 9.5ZM8 9.5C7.60218 9.5 7.22064 9.34196 6.93934 9.06066C6.65804 8.77936 6.5 8.39782 6.5 8C6.5 7.60218 6.65804 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5ZM13 9.5C12.6022 9.5 12.2206 9.34196 11.9393 9.06066C11.658 8.77936 11.5 8.39782 11.5 8C11.5 7.60218 11.658 7.22064 11.9393 6.93934C12.2206 6.65804 12.6022 6.5 13 6.5C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8C14.5 8.39782 14.342 8.77936 14.0607 9.06066C13.7794 9.34196 13.3978 9.5 13 9.5Z" fill="#9C9BA8"/>
            </svg>
          </button>
            <ModalCard  className={`${styles['row-actions']} ${ actionsActive  && styles['hidden']}`}>
              <Fragment> 
                <button onMouseDown={() => setShowModal(true)} className="reset-btn">Edit</button>
                <button onMouseDown={() => onDeleteObservation(observationData.id)} className="reset-btn">Delete</button>
              </Fragment>
            </ModalCard>
        </th>
        <td>
          <p>{observationData.notes}</p>
        </td>
        <td>
          <ul className={styles['ul']}>
            {observationData.heuristics.map(elem => <li key={Math.random()} >{normalizeText(elem)}</li>)}
          </ul>
        </td>
        <td style={{backgroundColor: setSeverityColor(observationData.severity) }} className={styles["severity"]}>{observationData.severity}</td>
        <td>
          {observationData.evidence && <img
            src={observationData.evidence}
            alt="evidence"
          />}
        </td>
        <td>
          <p>{observationData.recommendations}</p>
        </td>
      </tr>    
    </Fragment>
  ); 
}; 



export default Observation; 
