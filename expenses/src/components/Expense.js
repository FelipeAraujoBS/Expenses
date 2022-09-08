import { useState } from "react";
import ExpensesFilter from "./Expenses/ExpensesFilter/ExpensesFilter"
import ExpenseList from "./Expenses/ExpensesList/ExpenseList";
import styles from './Expense.module.css'
import Card from "./UI/Card/Card";
import ExpensesChart from "./Expenses/ExpensesChart/ExpensesChart"

function NewExpenseItem(props) {
    const [yearFilter, setYearFilter] = useState('2019');
    
    const filterValue = (selectHandler) => {
        setYearFilter(selectHandler);
    }
 
    const filteredExpenses = props.data.filter((expense) => {
        return expense.date.getFullYear().toString() === yearFilter;
    });

    return(
        <Card className={styles.expenses}>
            <ExpensesFilter selectedValue={yearFilter} changeFilter={filterValue}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList expense={filteredExpenses}/>
        </Card>
    );
}

export default NewExpenseItem;