import React, {useRef, useEffect, useCallback} from 'react'; 

//This is a custom hook, created in order to reduce some logic ✨
const useClickOutside = (setVisibility: React.Dispatch<React.SetStateAction<boolean>>, optionalFunction:() => void = () =>{}) => {
  const containerRef = useRef<HTMLDivElement>(null); 

  const handleClickOutside = useCallback((event) => {
    if(containerRef && containerRef.current && containerRef.current && !containerRef.current.contains(event.target)){
      setVisibility(false); 
      optionalFunction(); 
    }
  }, [optionalFunction, setVisibility]); 

  useEffect(()=>{
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return containerRef;
}

export default useClickOutside
