import React, {Fragment} from 'react'; 
import ReactDOM from 'react-dom';
import ModalOverlay from './ModalOverlay'; 
import {ObservationFormInterface} from '../../common/types'; 
import styles from './ObservationForm.module.css';

// ACTUAL COMPONENT
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
