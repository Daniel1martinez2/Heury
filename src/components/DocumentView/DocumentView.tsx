import React, {useState} from 'react';
import styles from './DocumentView.module.css'; 
import {ObservationType} from '../../library/common/types'; 
import { normalizeText } from '../../library/common/commonFunc';
import {setSeverityColor} from '../../library/common/commonFunc'; 
import { nanoid } from 'nanoid'; 
import ImageDetail from '../ImageDetail/ImageDetail';

interface DocumentViewInterface {
  observationData: ObservationType;
  index: number
  ref?: any
}

const DocumentView: React.FC<DocumentViewInterface>= React.forwardRef( ({observationData, index}, ref:any) => {
  const {notes, heuristics, severity, evidence, recommendations} = observationData; 
  const [isIncomplete, setIsIncomplete] = useState<boolean>(false); 
  const [imgModal, setImgModal] = useState(false); 
  // let isIncomplete = false; 

  return (
    <div 
      ref={ref}
      className={styles['container']}
    >
      <ImageDetail 
        image={evidence} 
        setImgModal = {setImgModal}
        imgModal = {imgModal}
      />
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
        <div className={[styles['card']].join(' ')}>
          <h1>Evidence</h1>
          <div className={styles['image-container']}>
            {isIncomplete && <div className={styles['overlay']}></div>}
            {evidence && <img
              ref={ img => {
                if(!img) return 
                console.log(img.getBoundingClientRect().height);
                if(img.getBoundingClientRect().height === 500)  setIsIncomplete(true)
              }} 
              src={evidence} 
              alt="evidence" 
              className={styles['image']}
              onClick={() => setImgModal(true)}
            />}
          </div>
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
              {heuristics.map(elem => <li key={nanoid()} >{normalizeText(elem)}</li>)}
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
})


export default DocumentView
