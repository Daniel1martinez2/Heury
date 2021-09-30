import React, {useState} from 'react'

import styles from './ObservationForm.module.css'; 
import '../../index.css';

import CheckInput from './CheckInput'; 
import Select from './Select'; 

import {transformTypeToConstansCase} from '../../common/commonFunc'; 
import {ObservationType, ModalOverlayInterface} from '../../common/types'; 
import {heuristics,severityData, defaultImage} from '../../common/commonData'; 

const ModalOverlay:React.FC<ModalOverlayInterface> = ({onAddObservation, setShowModal, editData, onSetObservation}) => {
  const notesDefault = editData? editData.notes : '';
  const recommendationsDefault = editData? editData.recommendations : '';
  const heuristicSelectedArrayDefault = editData? editData.heuristics.map((elem:string) => elem.split(' ').join('')) : [];
  const severityDefault = editData? editData.severity : '';

  const [notes, setNotes] = useState(notesDefault); 
  const [recommendations, setRecommendations] = useState(recommendationsDefault); 
  const [heuristicSelectedArray, setHeuristicSelectedArray] = useState(heuristicSelectedArrayDefault); 
  const [severity, setSeverity] = useState(severityDefault); 

  const onSetNotes:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => setNotes(event.target.value); 
  const onSetRecommendations:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => setRecommendations(event.target.value); 
  const onSetSeverity:React.ChangeEventHandler<HTMLSelectElement> = (event) => setSeverity(event.target.value); 
  

  const onEditCheckBoxArray = (name: string) => {
    if(heuristicSelectedArray.includes(name)){
      setHeuristicSelectedArray(heuristicSelectedArray.filter((elem:string) => elem !== name)); 
      console.log('BESOS');
      return
    }
    const currentCheckBox = heuristics.findIndex((elem:string) => elem === name);
    setHeuristicSelectedArray((prev:string[]) => [...prev, heuristics[currentCheckBox] ]); 
  }; 

  const handlerSubmit:React.FormEventHandler<HTMLFormElement>  = (event:any) => {
    event.preventDefault();
    const formRef = event.target;
    const currentObservation:ObservationType = {
      index: 2,
      notes: formRef.notes.value,
      heuristics: heuristicSelectedArray.map((elem:string) => transformTypeToConstansCase(elem || '')),
      severity:formRef.severity.value.split('-').join(' '),
      evidence: /http/.test(formRef.evidence.value)? formRef.evidence.value : defaultImage , 
      recommendations: formRef.solution.value, 
      id: Math.random().toString()
    }
    if(!editData && !!onAddObservation){
      onAddObservation(currentObservation); 
      setShowModal(false); 
      return; 
    }
    onSetObservation({newObservation:currentObservation, id: editData.id})
    // hide the modal
    setShowModal(false); 
  }; 

  const observationHeuristics = heuristicSelectedArray.map((elem:string) => (elem.charAt(0).toUpperCase() + elem.slice(1)).split(' ').join('') )
  
  return(
    <form className={styles['form']} onSubmit={handlerSubmit}>
        <label className={styles['textarea-label']}>
          Notes
          <textarea onChange={onSetNotes} value={notes} name="notes">{notes}</textarea>
        </label>
        <div className={styles['check-box']}>
          {heuristics.map(checkBoxElem => (
            <CheckInput 
              key={Math.random().toString()} 
              onEditCheckBoxArray={onEditCheckBoxArray}
              validation={observationHeuristics.includes(checkBoxElem)}
              name={checkBoxElem} 
              />
            ))}
        </div>
        <label>
          Evidence
          <input name="evidence" type="text" />
        </label>
          
        <label>
          Severity
            <Select severityData={severityData} severity={severity} onSetSeverity={onSetSeverity} />
        </label>
        
        <label className={styles['textarea-label']}>
          Solution
          <textarea onChange={onSetRecommendations} value={recommendations} name="solution">{recommendations}</textarea>
        </label>
        <button className={`reset-btn ${styles['btn']}`}>{editData? 'Save Changes' : 'Create Observation'}</button>
      </form>
  ); 
}
export default ModalOverlay
