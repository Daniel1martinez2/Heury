import React, {useState, useContext} from 'react'
import ProjectContext from '../../store/project-context'; 
import {motion} from 'framer-motion'; 
import styles from './ModalOverlay.module.css'; 
import { nanoid } from 'nanoid'; 
import '../../index.css';

import CheckInput from '../CheckInput/CheckInput'; 
import Select from '../Select/Select'; 

import {transformTypeToConstansCase} from '../../library/common/commonFunc'; 
import {ObservationType, ModalOverlayInterface, Form} from '../../library/common/types'; 
import {heuristics,severityData, appear} from '../../library/common/commonData'; 
import FileInput from '../FileInput/FileInput';

const ModalOverlay:React.FC<ModalOverlayInterface> = ({setShowModal, editData, projectId}) => {
  const ctx = useContext(ProjectContext);
  const {createObservation, editObservation} = ctx; 

  const notesDefault = editData? editData.notes : '';
  const recommendationsDefault = editData? editData.recommendations : '';
  const heuristicSelectedArrayDefault = editData && editData.heuristics ? editData.heuristics.map((elem:string) => elem.split(' ').join('')) : [];
  const severityDefault = editData? editData.severity : '';
  const evidenceDefault = editData? editData.evidence : '';

  const [notes, setNotes] = useState(notesDefault); 
  const [recommendations, setRecommendations] = useState(recommendationsDefault); 
  const [heuristicSelectedArray, setHeuristicSelectedArray] = useState(heuristicSelectedArrayDefault); 
  const [severity, setSeverity] = useState<string>(severityDefault);
  const [evidence, setEvidence] = useState<string>(evidenceDefault);
  
  const onSetNotes:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => setNotes(event.target.value); 
  const onSetRecommendations:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => setRecommendations(event.target.value); 
  const onSetSeverity:React.ChangeEventHandler<HTMLSelectElement> = (event) => setSeverity(event.target.value); 
  
  const onEditCheckBoxArray = (name: string) => {
    if(heuristicSelectedArray.includes(name)){
      setHeuristicSelectedArray(heuristicSelectedArray.filter((elem:string) => elem !== name)); 
      return
    }
    const currentCheckBox = heuristics.findIndex((elem:string) => elem === name);
    setHeuristicSelectedArray((prev:string[]) => [...prev, heuristics[currentCheckBox] ]); 
  }; 

  const handlerSubmit:React.FormEventHandler<Form>  = (event) => {
    event.preventDefault();
    const formRef = event.currentTarget.elements;
    const currentObservation:ObservationType = {
      notes: formRef.notes.value,
      heuristics: heuristicSelectedArray.map((elem:string) => transformTypeToConstansCase(elem || '')),
      severity: transformTypeToConstansCase(formRef.severity.value) ,
      evidence: evidence, 
      recommendations: formRef.recommendation.value, 
      id:editData? editData.id : nanoid(),
    }
    if(!editData){
      createObservation(currentObservation, projectId); 

      setShowModal(false); 
      return; 
    }
    // onSetObservation({newObservation:currentObservation, id: editData.id}); 
    editObservation({newObservation:currentObservation, id: editData.id, projectId})
    // hide the modal
    setShowModal(false); 
  };
  
  const onSetEvidence = (img:string) => {
    setEvidence(img); 
  }

  const observationHeuristics = heuristicSelectedArray.map((elem:string) => (elem.charAt(0).toUpperCase() + elem.slice(1)).split(' ').join('') )
  
  return(
    <motion.form 
      className={styles['form']} 
      onSubmit={handlerSubmit}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <label className={styles['textarea-label']}>
        Notes
        <textarea onChange={onSetNotes} value={notes} name="notes">{notes}</textarea>
      </label>
      <div className={styles['check-box']}>
        {heuristics.map(checkBoxElem => (
          <CheckInput 
            key={nanoid()} 
            onEditCheckBoxArray={onEditCheckBoxArray}
            validation={observationHeuristics.includes(checkBoxElem)}
            name={checkBoxElem} 
            />
          ))}
      </div>
      <label>Evidence</label>
      <FileInput prevEvidence={evidence} onSetEvidence={onSetEvidence}/>
      <label>
        Severity
          <Select defaultValue="Select One" active={false} className={styles['select']} selectData={severityData} value={severity} name="severity" onSetSelected={onSetSeverity} />
      </label>

      <label className={styles['textarea-label']}>
        Recommendation
        <textarea onChange={onSetRecommendations} value={recommendations} name="recommendation">{recommendations}</textarea>
      </label>
      <motion.button 
        className={`reset-btn ${styles['btn']}`}
      >
        {editData? 'Save Changes' : 'Create Observation'}
      </motion.button>
    </motion.form>
  ); 
}
export default ModalOverlay
