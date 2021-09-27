import React, {Fragment, useState} from 'react'
import styles from './Observation.module.css'; 
import ModalCard from '../UI/ModalCard'; 
import '../index.css';

export default function Observation() {
  const [actionsActive, setActionsActive] = useState(true); 

  return (
    <tr>
      <th className={styles["t-header"]} >
        <h3>1</h3>
        <button onBlur={() => {
          setActionsActive(true)
          }} onClick={() => setActionsActive(false) } className={`${styles["transparent"]} ${styles["more"]}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5C2.60218 9.5 2.22064 9.34196 1.93934 9.06066C1.65804 8.77936 1.5 8.39782 1.5 8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5C3.39782 6.5 3.77936 6.65804 4.06066 6.93934C4.34196 7.22064 4.5 7.60218 4.5 8C4.5 8.39782 4.34196 8.77936 4.06066 9.06066C3.77936 9.34196 3.39782 9.5 3 9.5ZM8 9.5C7.60218 9.5 7.22064 9.34196 6.93934 9.06066C6.65804 8.77936 6.5 8.39782 6.5 8C6.5 7.60218 6.65804 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5ZM13 9.5C12.6022 9.5 12.2206 9.34196 11.9393 9.06066C11.658 8.77936 11.5 8.39782 11.5 8C11.5 7.60218 11.658 7.22064 11.9393 6.93934C12.2206 6.65804 12.6022 6.5 13 6.5C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8C14.5 8.39782 14.342 8.77936 14.0607 9.06066C13.7794 9.34196 13.3978 9.5 13 9.5Z" fill="#9C9BA8"/>
          </svg>
        </button>
          <ModalCard  className={`${styles['row-actions']} ${ actionsActive  && styles['hidden']}`}>
            <Fragment> 
              <button onMouseDown={() => console.log('Edit')} className="reset-btn">Edit</button>
              <button onMouseDown={() => console.log('Delete')} className="reset-btn">Delete</button>
            </Fragment>
          </ModalCard>
      </th>
      <td>
        <p>Some navigation menu items have problems
          with their clickable areas, there are some
          parts that are not covered</p>
      </td>
      <td>
        <p>
          Match between system and the real world
        </p>

      </td>
      <td className={styles["severity"]}>4 Major</td>
      <td>
        <img
          src="https://daniel1martinez2.github.io/heuristic_example/UX%20Check%20Results%20664902979aa943b9b76c765bff7dde7a/Untitled%209.png"
          alt="monkey"/>
      </td>
      <td>
        <p>Be yourself</p>
      </td>
    </tr>    
  ); 

}
