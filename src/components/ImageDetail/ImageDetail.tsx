import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ModalScreen from '../../UI/ModalScreen/ModalScreen'
import { appear } from '../../library/common/commonData'
import styles from './ImageDetail.module.css'; 

interface ImageDetailInterface {
  image: string
  setImgModal: React.Dispatch<React.SetStateAction<boolean>>
  imgModal: boolean; 
}

const ImageDetail: React.FC<ImageDetailInterface> = ({image, setImgModal, imgModal}) => {
  return (
    <AnimatePresence
      initial={false}
      exitBeforeEnter={true}
    >
      {imgModal && (
        <ModalScreen setShowModal={setImgModal}> 
          <motion.img
            variants={appear}
            initial="hidden"
            animate="visible"
            exit="exit"
            src={image}
            className={styles['modal-img']}
          />
        </ModalScreen>
      )}
    </AnimatePresence>
  )
}

export default ImageDetail
