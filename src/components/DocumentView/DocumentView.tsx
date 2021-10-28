import React from 'react';
import styles from './DocumentView.module.css'; 
import {ObservationType} from '../../library/common/types'; 
import { normalizeText } from '../../library/common/commonFunc';
import {setSeverityColor} from '../../library/common/commonFunc'; 
interface DocumentViewInterface {
  observationData: ObservationType;
  index: number
}

const DocumentView: React.FC<DocumentViewInterface>= ({observationData, index}) => {
  const {notes, heuristics, severity, evidence, recommendations} = observationData; 

  return (
    <div className={styles['container']}>
      {/* Title */}
      <div className={styles['title']}>
        <h1>{index+1}</h1>
        <span 
          style={{
            backgroundColor: setSeverityColor(severity),
            color: severity === '2 Middle'? '#1F1D2C' : '#FAFAFE' 
          }}
        >
          {severity}
        </span>
      </div>
      {/* Content */}
      <div className={styles['main']}>
        {/* Evidence */}
        <div className={styles['card']}>
          <h1>Evidence</h1>
          {evidence && <img 
            src={evidence} 
            alt="evidence" 
            className={styles['image']}
          />}
        </div>
        {/* Notes, heu, recommendation */}
        <div className={styles['under']}>
          <div className={styles['observation']}>
            <div className={styles['card']}>
              <h1>Notes</h1>
              <p>{notes}</p>
            </div>
            <div className={styles['card']}>
              <h1>Heuristics</h1>
              <ul className={styles['heuristic-container']}>
              {heuristics.map(elem => <li key={Math.random()} >{normalizeText(elem)}</li>)}
              </ul>
            </div>
          </div>
          <div className={[styles['card'], styles['recommendation']].join(' ')}>
            <h1>Recommendation</h1>
            <p>{recommendations}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentView
