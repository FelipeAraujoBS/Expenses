import styles from'./ExpensesFilter.module.css';

const ExpensesFilter = (props) => {

  const selectHandler = (event) => {
      props.changeFilter(event.target.value);
  }

  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expenses_filter__control}>
        <label>Filter by year</label>
        <select value={props.selectedValue} onChange={selectHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;