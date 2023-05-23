import React from 'react'
import styles from './Campo.module.css'

export default function Campo({type = 'number', label, placeholder, valor, aoAlterado, obrigatorio=false, nome, handleChange}) {
    const placeholderModificada = placeholder

    /* let valor ='Teste' */

  /*   const [valor, setValor] = useState('Teste') */

    const aoDigitado = (evento)=>{
        aoAlterado(evento.target.value)
        
    }

    const validar = (evento) =>{
        handleChange(evento)
    }

    return(
        <div className={styles.campo}>
            <label>{label}</label>
            <input 
                name={nome}
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                onBlur={validar}
                placeholder={placeholderModificada}
            />
        </div>
    )
}
