import styles from "./ExpenseDate.module.css"

function ExpenseDate(props){

    const Month = props.date.toLocaleString('pt-BR', { month: 'long'})
    const DisplayMonth = Month.charAt(0).toUpperCase() + Month.slice(1)

    const Year = props.date.toLocaleString('pt-BR', { year: 'numeric' })
    const Day = props.date.toLocaleString('pt-BR', { day: '2-digit' })
    

    return(
        <div className={styles.expenseDate}>
            <div className={styles.expenseDate__month}>{DisplayMonth}</div>
            <div className={styles.expenseDate__year}>{Year}</div>
            <div className={styles.expenseDate__day}>{Day}</div>
        </div>
    ); 
}

export default ExpenseDate;