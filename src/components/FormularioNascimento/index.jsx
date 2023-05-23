    import { useState } from "react";

    import styles from "./FormularioNascimento.module.css";
    import Campo from "components/Campo";
    import { ReactComponent as IconArrow } from "assets/images/icon-arrow.svg";

    export default function FormularioNascimento({ calcularData }) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [dayError, setDayError] = useState("");
    const [monthError, setMonthError] = useState("");
    const [yearError, setYearError] = useState("");

    const aoEnviar = (evento) => {
        evento.preventDefault();

       /*  day === "" ? setDayError("This field is required") : setDayError("")
        month === "" ? setMonthError("This field is required"): setMonthError("")
        year === "" ? setYearError("This field is required"): setYearError("") */

        if(day === "" || month=== "" || year=== "" ){
            setDayError("This field is required");
            setMonthError("This field is required");
            setYearError("This field is required");
        }else{
            if(dayError === "" && monthError === "" && yearError === ""){
                calcularData(day, month, year);
                setDay("");
                setMonth("");
                setYear("");
            }
        }

    };


    const handleDayChange = (event) => {
        const value = event.target.value;

        if(value === ""){
            setDayError("This field is required");
        }
        if (value < 1 || value > 31) {
            setDayError("Must be a valid day");
        } else {
            setDayError("");
        }
    };

    const handleMonthChange = (event) => {
        const value = event.target.value;
        if(value === ""){
            setMonthError("This field is required");
        }
        // Validar o valor do mês
        if (value < 1 || value > 12) {
            setMonthError('Must be a valid month');
        } else {
            setMonthError('');
        }

        
    };

    const handleYearChange = (event) => {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        const value = event.target.value;

        if(value === ""){
            setYearError("This field is required");
        }
        if(value > anoAtual){
            setYearError("Must be a valid year")
        }else{
            setYearError("")
        }

        validarDiaMes(day, month, value)
    };


    const validarDiaMes = (dia, mes, ano) =>{
        const data = new Date(ano, mes-1 , dia); 



        if ( parseInt(dia) !== data.getDate()) {
            console.log("data invalida")
            setDayError("Must be a valid date");
        }else{
            setDayError("");
        }
    }


    return (
        <section>
        <form onSubmit={aoEnviar} className={styles.formulario}>
            <div className={styles.campos}>
            <div>
                <Campo
                obrigatorio={true}
                label="DAY"
                placeholder="DD"
                valor={day}
                handleChange={handleDayChange}
                nome="day"
                aoAlterado={(valor) => setDay(valor)}
                />
                {dayError && <span className={styles.error}>{dayError}</span>}
            </div>
            <div>
                <Campo
                nome="month"
                handleChange={handleMonthChange}
                obrigatorio={true}
                label="MONTH"
                placeholder="MM"
                valor={month}
                aoAlterado={(valor) => setMonth(valor)}
                />
                {monthError && <span className={styles.error}>{monthError}</span>}
            </div>
            <div>
                <Campo
                nome="year"
                handleChange={handleYearChange}
                obrigatorio={true}
                label="YEAR"
                placeholder="YYYY"
                valor={year}
                aoAlterado={(valor) => setYear(valor)}
                />
                {yearError && <span className={styles.error}>{yearError}</span>}
            </div>
            </div>
            <div className={styles.divBotao}>
            <button className={styles.botao}>
                <IconArrow />
            </button>
            </div>
        </form>
        </section>
    );
    }
