import React, {Fragment} from 'react'

import Observation from '../../Observation/Observation'; 
import ObservationForm from '../../Observation/ObservationForm/ObservationForm'; 

import styles from './Table.module.css'; 

export default function Table() {
  return (
    <Fragment>
      {/* Actions */}
      <section className={styles["filter"]}>
      </section>

      {/* Table */}
      <ObservationForm />
      <section className={styles["wrapper"]}>
        <div className={styles["table-container"]}>
          {/* Table itself */}
          <table>
            <thead>
              <tr>
                <th className={styles["first"]}>#</th>
                <th>Notes</th>
                <th>Heuristic</th>
                <th>Severity</th>
                <th>Evidence</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {/* Observations */}
              <Observation/>
            </tbody>
          </table>
          <div className={styles["btn-container"]}>
            <button>New Observation</button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
