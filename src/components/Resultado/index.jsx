import React from 'react'
import styles from './Resultado.module.css'

export default function Resultado({resultDay, resultMonth, resultYear}) {
  return (
    <div className={styles.reusltado}>
        
        <label>
          {resultYear} years
        </label>
        <label>

        {resultMonth} months
        </label>

        <label>

        {resultDay} days
        </label>
    </div>
  )
}
