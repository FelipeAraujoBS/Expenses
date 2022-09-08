import styles from "./ExpenseList.module.css"
import ExpenseItem from "../ExpensesItem/ExpenseItem"


const ExpenseList = props => {
    if (props.expense.length === 0) {
        return <h2 className={styles.expenses_list__fallback}>Nenhuma despesa cadastrada!</h2>
    }


    return (
        <ul className={styles.expenses_list}>
            {props.expense.map((expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )))}
        </ul>
    );

}

export default ExpenseList;