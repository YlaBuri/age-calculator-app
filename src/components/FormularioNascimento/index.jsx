import { useState } from 'react';

import styles from './FormularioNascimento.module.css'
import Campo from 'components/Campo';
import {ReactComponent as IconArrow} from 'assets/images/icon-arrow.svg'

export default function FormularioNascimento({calcularData}) {


    const[day, setDay] = useState('');
    const[month, setMonth] = useState('');
    const[year, setYear] = useState('');

    const aoEnviar=(evento) =>{
        evento.preventDefault();
        calcularData(day, month, year)
        setDay('');
        setMonth('');
        setYear('');
    }

    return (
        <section >
            <form  onSubmit={aoEnviar} className={styles.formulario}>
                <div className={styles.campos}>
                    <Campo obrigatorio={true} label="DAY" placeholder="DD"
                    valor={day}
                    aoAlterado={valor => setDay(valor)}/>

                    <Campo obrigatorio={true} label="MONTH" placeholder="MM"
                    valor={month}
                    aoAlterado={valor => setMonth(valor)}/>

                    <Campo obrigatorio={true} label="YEAR" placeholder="YYYY"
                    valor={year}
                    aoAlterado={valor => setYear(valor)}/>
                </div>
                <div className={styles.divBotao}>

                    <button className={styles.botao}><IconArrow/></button>
                </div>
            </form>
            
        </section>
    )
}
