import { motion } from 'framer-motion';
import React from 'react';
import { appear } from '../../library/common/commonData';
import ModalScreen from '../../UI/ModalScreen/ModalScreen'; 
import styles from './ConfirmAction.module.css';

interface ConfirmActionProps {
  setShowModal: any
  mainAction: () => void
  observationIndex: number
}

const ConfirmAction: React.FC<ConfirmActionProps> = ({setShowModal, mainAction, observationIndex}) => {
  return (
    <ModalScreen setShowModal={setShowModal} >
      <motion.div 
        variants={appear}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.container}
      >
        <h3>Are you sure you want to <strong>DELETE</strong> the observation <strong>#{observationIndex}</strong></h3>
        <div className={styles.btns}>
          <button 
            className={['reset-btn', styles.cancel].join(' ')}
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button 
            className={['reset-btn', styles.delete].join(' ')}
            onClick={mainAction}
          >
            Delete
          </button>
        </div>
      </motion.div>
    </ModalScreen>
  )
}

export default ConfirmAction
