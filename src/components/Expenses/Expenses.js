import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart
 from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
//   let expensesContent = <p>No expenses found.</p>;

//   if (filteredExpenses.length>0){
//     expensesContent=filteredExpenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}/>
//     ));
// }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
