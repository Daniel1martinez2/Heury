import React from 'react'
import styles from './EmptyDocument.module.css'; 
import svgEmpty from '../../library/img/frameEmpty.svg'; 
import {Link } from "react-router-dom";

const EmptyDocument = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['info-area']}>
       <img src={svgEmpty} alt="" />
        <div className={styles['info']}>
          <h1>Start by creating an observation</h1>
          <p>You can create an observation in the table view, by pressing the button <span>New Observation</span> and then adding the info in the form</p>
          <Link 
            className={styles['link']}
            to="/project/table"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L14 0C14.5304 0 15.0391 0.210714 15.4142 0.585786C15.7893 0.960859 16 1.46957 16 2V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H2C1.46957 16 0.960859 15.7893 0.585786 15.4142C0.210714 15.0391 0 14.5304 0 14V2ZM15 4H11V7H15V4ZM15 8H11V11H15V8ZM15 12H11V15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V12ZM10 15V12H6V15H10ZM5 15V12H1V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H5ZM1 11H5V8H1V11ZM1 7H5V4H1V7ZM6 4V7H10V4H6ZM10 8H6V11H10V8Z"
                fill="#7F828F" />
            </svg>
            <span>Table</span>
            
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmptyDocument
