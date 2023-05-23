import { useState } from 'react';
import FormularioNascimento from 'components/FormularioNascimento'
import Resultado from 'components/Resultado'
import React from 'react'
import styles from './Inicio.module.css'

export default function Inicio() {

  const[idadeDay, setIdadeDay] = useState('--');
  const[idadeMonth, setIdadeMonth] = useState('--');
  const[idadeYear, setIdadeYear] = useState('--');

  const calcularData=(day, month, year)=>{

    const dataAtual = new Date();
    const diaAtual = dataAtual.getDate();
    const mesAtual = dataAtual.getMonth() + 1; // Os meses são indexados de 0 a 11
    const anoAtual = dataAtual.getFullYear();
  
    let idadeAnos = anoAtual - year;
    let idadeMeses = mesAtual - month;
    let idadeDias = diaAtual - day;
  
      // Verifica se o dia de nascimento é posterior ao dia atual
    if (idadeMeses < 0 || (idadeMeses === 0 && idadeDias < 0)) {
      idadeAnos--;
      idadeMeses += 12;
    }

    // Verifica se o mês de nascimento é posterior ao mês atual
    if (idadeDias < 0) {
      const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
      idadeDias += ultimoDiaMesAnterior;
      idadeMeses--;
    }

    console.log(`resultado: ${idadeAnos} anos, ${idadeMeses} meses, ${idadeDias} dias`)
    setIdadeDay(idadeDias)
    setIdadeMonth(idadeMeses)
    setIdadeYear(idadeAnos)
  }

  return (
    <div className={styles.content}>
        
        <div className={styles.container}>
          <FormularioNascimento calcularData={calcularData}/>

          <Resultado resultDay={idadeDay} resultMonth={idadeMonth} resultYear={idadeYear}/>
        </div>

        <footer className="attribution">
            Challenge by <a  rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://www.github.com/YlaBuri">Yla</a>.
        </footer>
    </div>
  )
}
