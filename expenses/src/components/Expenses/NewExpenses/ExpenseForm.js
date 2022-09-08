import { useState } from "react";
import styles from "./ExpenseForm.module.css"

function ExpenseForm(props){
    const [enteredTtitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const [enteredAmout, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        
        const expenseData = {
            title: enteredTtitle,
            amount: +enteredAmout,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

  
    return(
        <form onSubmit={submitHandler}>
            <div className={styles.new_expense__controls}>
                <div className={styles.new_expense__control}>
                    <label>Título</label>
                    <input 
                        placeholder="Título" type="text" 
                        value={enteredTtitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className={styles.new_expense__control}>
                    <label>Custo</label>
                    <input
                        placeholder="Custo" type="number" 
                        min="0.01" step="0.01" 
                        value={enteredAmout}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className={styles.new_expense__control}>
                    <label>Data</label>
                    <input
                        type="date" 
                        min="2019-01-01" max="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className={styles.new_expense__actions}>
                <button onClick={props.onCancel} type="button">Cancelar</button>
                <button type="submit">Adicionar Despesa</button>
            </div>
        </form>
    );
}

export default ExpenseForm