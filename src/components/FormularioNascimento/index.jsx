import { useState } from 'react';
import Campo from '../Campo';
import styles from './FormularioNascimento.module.css'

export default function FormularioNascimento() {


    const[day, setDay] = useState('');
    const[month, setMonth] = useState('');
    const[year, setYear] = useState('');

    return (
        <section >
            <form className={styles.formulario}>
                <Campo obrigatorio={true} label="Day" placeholder="DD"
                valor={day}
                aoAlterado={valor => setDay(valor)}/>

                <Campo obrigatorio={true} label="Month" placeholder="MM"
                valor={month}
                aoAlterado={valor => setMonth(valor)}/>

                <Campo obrigatorio={true} label="Year" placeholder="YYYY"
                valor={year}
                aoAlterado={valor => setYear(valor)}/>
            </form>
            
        </section>
    )
}
