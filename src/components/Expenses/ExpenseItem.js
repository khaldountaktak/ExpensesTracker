import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
function ExpenseItem(props) {
  // const DateLyoum = new Date(2022,2,23);
  // const ExpenseName= 'mekla'

  // const ExpensePrice='40DT'
  const [title,UpdateTitle] = useState(props.title);
  const clickHandler= () => {
    UpdateTitle("Updated!!!") //title="Updated!!!"
    console.log("Clicked!!!");
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Click me!</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
