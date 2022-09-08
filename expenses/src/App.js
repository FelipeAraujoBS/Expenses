import { useState } from "react"
import Expense from "./components/Expense"
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";
import styles from "./components/Expenses/NewExpenses/NewExpense.module.css"



const DUMMY_EXPENSES= [
  {
    id: 'e1',
    title: 'Papel Higiênico',
    amount: '30',
    date: new Date("2019, 6, 25"),
  },
  {
    id: 'e2',
    title: 'Conta de Agua',
    amount: '120',
    date: new Date("2020, 4, 12"),
  },
  {
    id: 'e3',
    title: 'Conta de Luz',
    amount: '250',
    date: new Date("2020, 2, 02"),
  },
  {
    id: 'e4',
    title: 'Gasolina',
    amount: '200',
    date: new Date("2021, 9, 06"),
  },
  {
    id: 'e5',
    title: 'Gás de Cozinha',
    amount: '200',
    date: new Date("2022, 12, 23"),
  },
  
];

function App() {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  }

  return (
    <div>
      <div className={styles.name}>
          <h1>Monitoramento de Despesas</h1>
      </div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense data={expenses}/>
    </div>
  );
}

export default App;
