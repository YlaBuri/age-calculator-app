import React from 'react'
import styles from './Resultado.module.css'

export default function Resultado({resultDay, resultMonth, resultYear}) {
  return (
    <div className={styles.reusltado}>
        
        <div className={styles.labelResultado}> 
          <div className={styles.valorResultado}>{resultYear} </div>
          years
        </div>

        <div className={styles.labelResultado}>
          <div className={styles.valorResultado}>{resultMonth}</div> 
          months
        </div>

        <div className={styles.labelResultado}> 
          <div className={styles.valorResultado}>{resultDay} </div>
          days
        </div>
    </div>
  )
}
