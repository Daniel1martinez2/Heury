import React, {Fragment} from 'react'; 
import ReactDOM from 'react-dom';
import styles from './ObservationForm.module.css'; 



export const heuristicData = [
  {
    value: 'visibility',
    heuristicData: 'Visibility of system status',
  },
  {
    value: 'match',
    heuristicData: 'Match between system and the real world',
  },
  {
    value: 'control,',
    heuristicData: 'User control and freedom',
  },
  {
    value: 'consistency',
    heuristicData: 'Consistency and standards',
  },
  {
    value: 'error',
    heuristicData: 'Error prevention',
  },
  {
    value: 'recognition',
    heuristicData: 'Recognition rather than recall',
  },
  {
    value: 'scales',
    heuristicData: 'Flexibility and efficiency of use',
  },
  {
    value: 'flexibility',
    heuristicData: 'Aesthetic and minimalist design',
  },
  {
    value: 'recover',
    heuristicData: 'Help recognize & recover from errors',
  },
  {
    value: 'documentation',
    heuristicData: 'Help and documentation',
  },
]; 

const ModalOverlay = ({onAddObservation, setShowModal, editData, onSetObservation}:{onAddObservation: any, setShowModal: any, editData?: any, onSetObservation?: any}) => {
  
  let dataTest:string[] | null= [
    // 'visibility',
    // 'match',
    // 'control',
    // 'consistency',

  ]; 

  if(editData){
    const test1 = heuristicData.filter(elem => editData.heuristics.includes(elem.heuristicData)); 
    const test2 = test1.map((elem:any) => elem.value); 
    // console.log(test2);
    dataTest = test2;
  }
  

  const getChecked = (checkBoxArray:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>[]) => {
    // checkBoxArray.forEach(elem => console.log(elem.checked))
    return checkBoxArray.filter(elem => elem.checked).map(elem => elem.name); 
  }

  const handlerSubmit:React.FormEventHandler<HTMLFormElement>  = (event:any) => {
    

    event.preventDefault();
    const formRef = event.target;
    // console.log(formRef.match.checked);
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
    
    const currentObservation = {
      index: 2,
      notes: formRef.notes.value,
      heuristics:heuristicsName ,
      severity:formRef.severity.value.split('-').join(' '),
      evidence: 'https://daniel1martinez2.github.io/heuristic_example/UX%20Check%20Results%20664902979aa943b9b76c765bff7dde7a/Untitled%209.png', 
      recommendations: formRef.solution.value, 
      id: Math.random().toString()
    }
    if(!editData){
      onAddObservation(currentObservation); 
    }else{
      onSetObservation({newObservation:currentObservation, id: editData.id})
    }
    setShowModal(false); 
    // heuristicData[heuristicData.findIndex(e => e.value === elem.name)].value
    // check the box with code
    // formRef.documentation.checked = true; 
  }
  return(
    <form className={styles['form']} onSubmit={handlerSubmit}>
        <label>
          Notes
          <input type="text" name="notes" />
        </label>
        <div className={styles['check-box']}>
          <label>
            <input type="checkbox" name="visibility" defaultChecked={dataTest.includes("visibility")} />
            Visibility of system status
          </label>
          <label>
            <input type="checkbox" name="match" defaultChecked={dataTest.includes("match")} />
            Match between system and the real world
          </label>
          <label>
            <input type="checkbox" name="control" defaultChecked={dataTest.includes("control")} />
            User control and freedom
          </label>
          <label>
            <input type="checkbox" name="consistency" defaultChecked={dataTest.includes("consistency")} />
            Consistency and standards
          </label>
          <label>
            <input type="checkbox" name="error" defaultChecked={dataTest.includes("error")} />
            Error prevention
          </label>
          <label>
            <input type="checkbox" name="recognition" defaultChecked={dataTest.includes("recognition")} />
            Recognition rather than recall
          </label>
          <label>
            <input type="checkbox" name="scales" defaultChecked={dataTest.includes("scales")} />
            Flexibility and efficiency of use
          </label>
          <label>
            <input type="checkbox" name="flexibility" defaultChecked={dataTest.includes("flexibility")} />
            Aesthetic and minimalist design
          </label>
          <label>
            <input type="checkbox" name="recover" defaultChecked={dataTest.includes("recover")} />
            Help recognize & recover from errors
          </label>
          <label>
            <input type="checkbox" name="documentation" defaultChecked={dataTest.includes("documentation")} />
            Help and documentation
          </label>
        </div>

        <label>
          Evidence
          <input type="text" />
        </label>
          
        <label>
          Severity
          <select name="severity">
            <option value="">--Please choose an option--</option>
            <option value="1-Minor">1 Minor</option>
            <option value="2-Middle">2 Middle</option>
            <option value="3-High">3 High</option>
            <option value="4-Major">4 Major</option>
          </select>
        </label>
        
        <label>
          Solution
          <input name="solution" type="text" />
        </label>

        <button>Create Observation</button>
      </form>
  ); 
}

const ObservationForm = ({onAddObservation, setShowModal, editData, onSetObservation}:{onAddObservation?: any, setShowModal: any, editData?: any, onSetObservation?: any}) => {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const backdrop = document.getElementById("backdrop-root") as HTMLElement;
  return (
    <Fragment>
      {ReactDOM.createPortal(<div onClick={() => setShowModal(false)} className={styles['form-wrapper']}></div>, backdrop)}
      {ReactDOM.createPortal(<ModalOverlay onSetObservation={onSetObservation} editData={editData} setShowModal={setShowModal} onAddObservation={onAddObservation} />, modalRoot)}
    </Fragment>
  )
}

export default ObservationForm
