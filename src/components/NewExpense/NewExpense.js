import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

//custom prop onSaveExpenseDate child to parent

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);

    console.log(
      "Communication between child to parent components",
      expenseData
    );
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
