import React, {Fragment, useState} from 'react'; 
import ReactDOM from 'react-dom';
import styles from './ObservationForm.module.css'; 
import '../../index.css';
import {ObservationInterface, addObservation} from '../../common/types'; 
import HTMLAttributes from "../../../index.d";
import CheckInput from './CheckInput'; 
import {transformTypeToConstansCase} from '../../common/commonFunc'; 
import Select from './Select'; 

const heuristics = [
  'VisibilityOfSystemStatus',
  'MatchBetweenSystemAndTheRealWorld',
  'UserControlAndFreedom',
  'ConsistencyAndStandards',
  'ErrorPrevention',
  'RecognitionRatherThanRecall',
  'FlexibilityAndEfficiencyOfUse',
  'AestheticAndMinimalistDesign',
  'HelpRecognizeAndRecoverFromErrors',
  'HelpAndDocumentation',
]; 

const severityData = [
  "1-Minor",
  "2-Middle",
  "3-High",
  "4-Major"
]; 

const ModalOverlay = ({onAddObservation, setShowModal, editData, onSetObservation}:{onAddObservation?: addObservation, setShowModal: any, editData?: any, onSetObservation?: any}) => {

  const [notes, setNotes] = useState(editData? editData.notes : ''); 
  const [recommendations, setRecommendations] = useState(editData? editData.recommendations : ''); 
  const [heuristicSelectedArray, setHeuristicSelectedArray] = useState(editData? editData.heuristics.map((elem:string) => elem.split(' ').join('')) : []); 
  // const heuristicSelectedArray = editData? editData.heuristics : []; 
  // const [selectedState, setSelectedState] = useState<any[]>([])
  const [severity, setSeverity] = useState(editData? editData.severity : ''); 
  const onSetNotes:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => setNotes(event.target.value); 
  const onSetRecommendations:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => setRecommendations(event.target.value); 
  const onSetSeverity:React.ChangeEventHandler<HTMLSelectElement> = (event) => setSeverity(event.target.value); 
  
  console.log(heuristicSelectedArray);
  const onEditCheckBoxArray = (name: string) => {
    if(heuristicSelectedArray.findIndex((elem:any) => elem === name) !== -1){
      setHeuristicSelectedArray(heuristicSelectedArray.filter((elem:any) => elem !== name))
      console.log('BESOS');
      return
    }
    const currentCheckBox = heuristics.findIndex((elem:any) => elem === name);
    const heuryCopy = [...heuristicSelectedArray]; 
    heuryCopy.push(heuristics[currentCheckBox]); 
    setHeuristicSelectedArray(heuryCopy)
    console.log('✨✨✨✨✨✨✨✨✨');
    console.log(currentCheckBox);
  }

  /* 
  const onSetObservation = ({newObservation, id}:{newObservation:ObservationInterface, id: string}) => {
    const currentObservation = DUMMY_OBSERVATIONS.findIndex(elem => elem.id === id)
    console.log(currentObservation, '😡');
    const newDummyData = DUMMY_OBSERVATIONS; 

    newDummyData[currentObservation] = {...newObservation}; 
    console.log(DUMMY_OBSERVATIONS.filter(elem => elem.id === id), '✨');
    console.log(newObservation, '🌈');
    setDUMMY_OBSERVATIONS([...newDummyData]); 
  }
  */

  

  // const getChecked = (checkBoxArray:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>[]) => {
  //   return checkBoxArray.filter(elem => elem.checked).map(elem => elem.name); 
  // }
  // START SUBMIT 🔥🔥🔥🔥🔥🔥🔥🔥
  const handlerSubmit:React.FormEventHandler<HTMLFormElement>  = (event:any) => {
    
    event.preventDefault();
    const formRef = event.target;
    console.log(heuristicSelectedArray);
    // if(formRef.severity.value === '') return; 

    // const selected = getChecked(heuristics.map(heuristicString => formRef[heuristicString])); 
    
    // setSelectedState(selected)
    // console.log(selected, '😀');
    // console.log(selectedState, '✅✅✅✅');
    
    const currentObservation:ObservationInterface = {
      index: 2,
      notes: formRef.notes.value,
      heuristics: heuristicSelectedArray.map((elem:string) => transformTypeToConstansCase(elem || '')),
      severity:formRef.severity.value.split('-').join(' '),
      evidence: /http/.test(formRef.evidence.value)? formRef.evidence.value : 'https://daniel1martinez2.github.io/heuristic_example/UX%20Check%20Results%20664902979aa943b9b76c765bff7dde7a/Untitled%209.png', 
      recommendations: formRef.solution.value, 
      id: Math.random().toString()
    }

    // console.log(heuristicSelectedArray);
    if(!editData && !!onAddObservation){
      onAddObservation(currentObservation); 
    }else{
      console.log(heuristicSelectedArray);
      console.log(heuristicSelectedArray.map((elem:string) => (elem.charAt(0).toUpperCase() + elem.slice(1)).split(' ').join('') ), '🥐');
      onSetObservation({newObservation:currentObservation, id: editData.id})
    }
    // hide the modal
    // setShowModal(false); 
  }
  // END SUBMIT 🔥🔥🔥🔥🔥🔥🔥🔥
  const observationHeuristics = heuristicSelectedArray.map((elem:string) => (elem.charAt(0).toUpperCase() + elem.slice(1)).split(' ').join('') )
  // const [observationHeuristics] = useState(heuristicSelectedArray.map((elem:string) => (elem.charAt(0).toUpperCase() + elem.slice(1)).split(' ').join('') )); 
  return(
    <form className={styles['form']} onSubmit={handlerSubmit}>
        <label className={styles['textarea-label']}>
          Notes
          <textarea onChange={onSetNotes} value={notes} name="notes">{notes}</textarea>
        </label>
        <div className={styles['check-box']}>
          {/* Create a function here */}
          {heuristics.map(checkBoxElem => (
            <CheckInput 
              key={Math.random().toString()} 
              onEditCheckBoxArray={onEditCheckBoxArray}
              validation={observationHeuristics.includes(checkBoxElem)}
              name={checkBoxElem} 
              observationHeuristics={observationHeuristics} />
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
interface ObservationFormInterface{
  onAddObservation?: addObservation;
  setShowModal:any ;
  editData?:any;
  onSetObservation?:any
}; 

const ObservationForm:React.FC<ObservationFormInterface>= (props) => {
  const {setShowModal} = props; 
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const backdrop = document.getElementById("backdrop-root") as HTMLElement;
  return (
    <Fragment>
      {ReactDOM.createPortal(<div onClick={() => setShowModal(false)} className={styles['form-wrapper']}></div>, backdrop)}
      {ReactDOM.createPortal(<ModalOverlay {...props} />, modalRoot)}
    </Fragment>
  )
}

export default ObservationForm
