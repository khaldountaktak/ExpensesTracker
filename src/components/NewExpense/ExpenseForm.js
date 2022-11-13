import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [Title, UserTitle] = useState("");
  const [Amount, UserAmount] = useState("");
  const [Datee, UserDate] = useState("");
  const TitleChangeHandler = (event) => {
    UserTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    UserAmount(event.target.value);
  };
  const DateChangeHandler = (event) => {
    UserDate(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: Title,
      amount: +Amount,
      date: new Date(Datee),
    };
    props.pipe(expenseData);
    UserTitle("");
    UserAmount("");
    UserDate("");
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={Title}
            onChange={TitleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            value={Amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          ></input>
          <div className="new-expense__control">
            <label> Date</label>
            <input
              value={Datee}
              type="date"
              onChange={DateChangeHandler}
            ></input>
          </div>
        </div>
      </div>
      <div className="new-expense__controls">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
