import React, {Fragment} from 'react'; 
import ReactDOM from 'react-dom';
import { ModalScreenInterface} from '../../library/common/types'; 
import {appear} from '../../library/common/commonData'; 
import styles from './ModalScreen.module.css';
import {motion} from 'framer-motion'; 


// ACTUAL COMPONENT
const ModalScreen:React.FC<ModalScreenInterface>= ({setShowModal, children}) => {
  
  const modalRoot = document.getElementById("modal-root") as HTMLElement;
  const backdrop = document.getElementById("backdrop-root") as HTMLElement;
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <motion.div 
          onClick={() => setShowModal(false)} 
          className={styles['modal-wrapper']}
          variants={appear}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
        </motion.div>
        , backdrop)}
      {ReactDOM.createPortal(<div className={styles['container']}>{children}</div>, modalRoot)}
    </Fragment>
  )
}

export default ModalScreen
