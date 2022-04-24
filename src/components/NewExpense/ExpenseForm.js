import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("")

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value.toString())
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(+event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value.toString())
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-04-23" max="2025-04-23" onChange={dateChangeHandler}/>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
