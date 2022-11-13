import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
const NewExpense = (props) => {
  const FormHandler = (ExpensesData) => {
    ExpensesData = {
      ...ExpensesData,
      id: Math.random().toString(),
    };
    props.AddingHandler(ExpensesData);
  };

  const [isEditing, setEditing] = useState(false);
  const stopEditing = () =>
  {setEditing(false);}
  const isEditingClicked = () => {
    setEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={isEditingClicked}>Start editing </button>}
      {isEditing &&<ExpenseForm pipe={FormHandler} onCancel={stopEditing}/> }
      
    </div>
  );
};

export default NewExpense;
