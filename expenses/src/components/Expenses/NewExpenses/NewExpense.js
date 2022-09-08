import { useState } from "react";
import styles from "./NewExpense.module.css"
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
        setStateStatus(false)
    };

    const [stateStatus, setStateStatus] = useState(false)

    const toggleTrue = () => {
        setStateStatus(true)
    }
    
    const toggleFalse = () => {
        setStateStatus(false);
    }
    
    if(stateStatus === false){
        return(
            <div className={styles.new_expense}>
            <button onClick={toggleTrue} type="button">Adicionar nova despesa</button>
            </div>
        );
    }
    
    return(
        <div className={styles.new_expense}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleFalse}/>
        </div>
    );
}


export default NewExpense;