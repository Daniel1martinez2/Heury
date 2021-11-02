import React, { useState, useEffect } from 'react'
import styles from './ThumbMoreActions.module.css'; 
import more from '../../library/img/more.svg'; 
import { motion, AnimatePresence } from 'framer-motion';
import useClickOutside from '../../hooks/use-clickOutside';
import {appear} from '../../library/common/commonData'; 

interface ThumbMoreActionsInterface {
  className: string;
  optionsActive: (efe: boolean) => void;
  setOptionsVisibility: React.Dispatch<React.SetStateAction<boolean>>; 
  handleDeleteProject: () => void; 
}

const ThumbMoreActions:React.FC<ThumbMoreActionsInterface> = ({className, optionsActive, setOptionsVisibility, handleDeleteProject}) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const optionsRef = useClickOutside(setVisibility, ()=>setOptionsVisibility(false));
  
  useEffect(() => {
    if(!visibility) {
      optionsActive(false);
    };
  }, [optionsActive, visibility]); 


  const handleOptionsClick = () => {
    setVisibility(true);
    optionsActive(true);
  }

  const optionsDiv = () =>{
    return (
      <motion.div 
          className={[styles['options']].join(' ')}
          ref={optionsRef}
          variants={appear}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className={['reset-btn', styles['btn']].join(' ')}>Share</button>
          <button 
            className={['reset-btn', styles['btn']].join(' ')}
            onClick={handleDeleteProject}
          >
            Delete
          </button>
        </motion.div>
    );
  }

  return (
    <motion.div 
      className={styles['btn-container']}
      variants={appear}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <button 
        className={['reset-btn', styles['more'], className].join(' ')}
        onClick={handleOptionsClick}
      >
        <img src={more} alt="more" />
      </button>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
      >
        {visibility && optionsDiv()}
      </AnimatePresence>

    </motion.div>
  )
}

export default ThumbMoreActions
