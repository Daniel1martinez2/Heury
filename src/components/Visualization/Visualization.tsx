import React from 'react'
import styles from './Visualization.module.css'; 
import { VisualizationType} from '../../library/common/types';

interface VisualizationInterface {
  setVisualizationMode: React.Dispatch<React.SetStateAction<VisualizationType>>;
  visualizationMode: VisualizationType; 
}

const Visualization: React.FC<VisualizationInterface> = ({setVisualizationMode, visualizationMode}) => {
  
  const activeStyle = (mode: VisualizationType) => {
    return visualizationMode === mode ? styles['active'] : ''; 
  }
  
  return (
    <nav className={styles['page-header__nav']}>
    <button  
      className={[styles['table'], 'reset-btn',  activeStyle('table')].join(' ')}
      onClick={() => setVisualizationMode('table')}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM15 4H11V7H15V4ZM15 8H11V11H15V8ZM15 12H11V15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V12ZM10 15V12H6V15H10ZM5 15V12H1V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H5ZM1 11H5V8H1V11ZM1 7H5V4H1V7ZM6 4V7H10V4H6ZM10 8H6V11H10V8Z"
          fill="#7F828F" />
      </svg>
      <h1>Table</h1>
    </button>
    
    <button 
      className={[styles['document'], 'reset-btn', activeStyle('document')].join(' ')}
      onClick={() => setVisualizationMode('document')}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14 4.5V14C14 14.5304 13.7893 15.0391 13.4142 15.4142C13.0391 15.7893 12.5304 16 12 16H4C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0L9.5 0L14 4.5ZM11 4.5C10.6022 4.5 10.2206 4.34196 9.93934 4.06066C9.65804 3.77936 9.5 3.39782 9.5 3V1H4C3.73478 1 3.48043 1.10536 3.29289 1.29289C3.10536 1.48043 3 1.73478 3 2V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H12C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8946 14.5196 13 14.2652 13 14V4.5H11Z"
          fill="#7F828F" />
      </svg>
      <h1>Document</h1>
    </button>
    
    <button  
      className={[styles['graph'], 'reset-btn', activeStyle('stats')].join(' ')}
      onClick={() => setVisualizationMode('stats')}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 11C1 10.7348 1.10536 10.4804 1.29289 10.2929C1.48043 10.1054 1.73478 10 2 10H4C4.26522 10 4.51957 10.1054 4.70711 10.2929C4.89464 10.4804 5 10.7348 5 11V14C5 14.2652 4.89464 14.5196 4.70711 14.7071C4.51957 14.8946 4.26522 15 4 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V11ZM6 7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H9C9.26522 6 9.51957 6.10536 9.70711 6.29289C9.89464 6.48043 10 6.73478 10 7V14C10 14.2652 9.89464 14.5196 9.70711 14.7071C9.51957 14.8946 9.26522 15 9 15H7C6.73478 15 6.48043 14.8946 6.29289 14.7071C6.10536 14.5196 6 14.2652 6 14V7ZM11 2C11 1.73478 11.1054 1.48043 11.2929 1.29289C11.4804 1.10536 11.7348 1 12 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V14C15 14.2652 14.8946 14.5196 14.7071 14.7071C14.5196 14.8946 14.2652 15 14 15H12C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14V2Z"
          fill="#7F828F" />
      </svg>
      <h1>Statistics</h1>
    </button>
  </nav>
  )
}

export default Visualization; 
