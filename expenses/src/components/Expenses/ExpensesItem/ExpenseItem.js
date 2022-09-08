import styles from "./ExpenseItem.module.css"
import ExpenseDate from "../ExpensesDate/ExpenseDate";
import Card from "../../UI/Card/Card";

function ExpenseItem(props) {


    return (
        <li>
            <Card className={styles.expenseItem}>
                <ExpenseDate date={props.date} />

                <h2>{props.title}</h2>
                <div className={styles.expenseItem__description}>
                    <div className={styles.expenseItem__price}>
                        {props.amount}
                    </div>
                </div>
            </Card>

        </li>
    );
}

export default ExpenseItem;