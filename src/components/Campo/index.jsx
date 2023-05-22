import React from 'react'
import styles from './Campo.module.css'

export default function Campo({type = 'number', label, placeholder, valor, aoAlterado, obrigatorio=false}) {
    const placeholderModificada = placeholder

    /* let valor ='Teste' */

  /*   const [valor, setValor] = useState('Teste') */

    const aoDigitado = (evento)=>{
        aoAlterado(evento.target.value)
        
    }

    return(
        <div className={styles.campo}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}
