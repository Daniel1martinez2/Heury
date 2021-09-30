import React, {Fragment, useState} from 'react'; 
import ReactDOM from 'react-dom';
import styles from './ObservationForm.module.css'; 
import {heuristicData} from '../../common/dummyData'; 
import '../../index.css';
import {ObservationInterface, addObservation} from '../../common/types'; 
import HTMLAttributes from "../../../index.d";

const transformTypeToConstansCase = (word:string) => {
  return (word.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) || [ word ]).join(' ');
};

const ModalOverlay = ({onAddObservation, setShowModal, editData, onSetObservation}:{onAddObservation?: addObservation, setShowModal: any, editData?: any, onSetObservation?: any}) => {
  const [notes, setNotes] = useState(editData? editData.notes : ''); 
  const [recommendations, setRecommendations] = useState(editData? editData.recommendations : ''); 
  const [severity, setSeverity] = useState(editData? editData.severity : ''); 
  const onSetNotes:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => setNotes(event.target.value); 
  const onSetRecommendations:React.ChangeEventHandler<HTMLTextAreaElement> = (event) => setRecommendations(event.target.value); 
  const onSetSeverity:React.ChangeEventHandler<HTMLSelectElement> = (event) => setSeverity(event.target.value); 
  

  let dataTest:string[] | null= [
    // 'visibility',
  ]; 

  if(editData){
    const test1 = heuristicData.filter(elem => editData.heuristics.includes(elem.heuristicData)); 
    const test2 = test1.map((elem:any) => elem.value); 
    // console.log(test2);
    dataTest = test2;
  }
  

  const getChecked = (checkBoxArray:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>[]) => {
    return checkBoxArray.filter(elem => elem.checked).map(elem => elem.name); 
  }

  const handlerSubmit:React.FormEventHandler<HTMLFormElement>  = (event:any) => {
    event.preventDefault();
    const formRef = event.target;
    const checkBoxArray = [
      formRef.visibility, 
      formRef.match, 
      formRef.control, 
      formRef.consistency,
      formRef.error,
      formRef.recognition,
      formRef.scales,
      formRef.flexibility,
      formRef.recover,
      formRef.documentation,
    ]; 
    const selected = getChecked(checkBoxArray); 
    const heuristicArray = heuristicData.filter(elem => selected.includes(elem.value)); 
    const heuristicsName = heuristicArray.map(elem => elem.heuristicData); 

    // Validations
    if(formRef.severity.value === '') return; 
    // Creating the final observation obj which will be sended

    const currentObservation = {
      index: 2,
      notes: formRef.notes.value,
      heuristics:heuristicsName ,
      severity:formRef.severity.value.split('-').join(' '),
      evidence: /http/.test(formRef.evidence.value)? formRef.evidence.value : 'https://daniel1martinez2.github.io/heuristic_example/UX%20Check%20Results%20664902979aa943b9b76c765bff7dde7a/Untitled%209.png', 
      recommendations: formRef.solution.value, 
      id: Math.random().toString()
    }

    if(!editData && !!onAddObservation){
      onAddObservation(currentObservation); 
    }else{
      onSetObservation({newObservation:currentObservation, id: editData.id})
    }
    // hide the modal
    setShowModal(false); 
  }
  return(
    <form className={styles['form']} onSubmit={handlerSubmit}>
        <label className={styles['textarea-label']}>
          Notes
          <textarea onChange={onSetNotes} value={notes} name="notes">{notes}</textarea>
        </label>
        <div className={styles['check-box']}>
          {/* Create a function here */}
          <label>
            <input type="checkbox" name="visibility" defaultChecked={dataTest.includes("visibility")} />
            <span>Visibility of system status</span>
          </label>
          <label>
            <input type="checkbox" name="match" defaultChecked={dataTest.includes("match")} />
            <span>Match between system and the real world</span>
          </label>
          <label>
            <input algo="" type="checkbox" name="control" defaultChecked={dataTest.includes("control")} />
            <span>User control and freedom</span>
          </label>
          <label>
            <input type="checkbox" name="consistency" defaultChecked={dataTest.includes("consistency")} />
            <span>Consistency and standards</span>
          </label>
          <label>
            <input type="checkbox" name="error" defaultChecked={dataTest.includes("error")} />
            <span>Error prevention</span>
          </label>
          <label>
            <input type="checkbox" name="recognition" defaultChecked={dataTest.includes("recognition")} />
            <span>Recognition rather than recall</span>
          </label>
          <label>
            <input type="checkbox" name="scales" defaultChecked={dataTest.includes("scales")} />
            <span>Flexibility and efficiency of use</span>
          </label>
          <label>
            <input type="checkbox" name="flexibility" defaultChecked={dataTest.includes("flexibility")} />
            <span>Aesthetic and minimalist design</span>
          </label>
          <label>
            <input type="checkbox" name="recover" defaultChecked={dataTest.includes("recover")} />
            <span>Help recognize & recover from errors</span>
          </label>
          <label>
            <input type="checkbox" name="documentation" defaultChecked={dataTest.includes("documentation")} />
            <span>Help and documentation</span>
          </label>
        </div>

        <label>
          Evidence
          <input name="evidence" type="text" />
        </label>
          
        <label>
          Severity
          <select onChange={onSetSeverity} value={severity.split(' ').join('-')} name="severity">
            <option value="">--Please choose an option--</option>
            <option value="1-Minor">1 Minor</option>
            <option value="2-Middle">2 Middle</option>
            <option value="3-High">3 High</option>
            <option value="4-Major">4 Major</option>
          </select>
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
