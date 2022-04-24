import React, { useState } from "react";

import moment from "moment";
import { v4 as uuid } from "uuid";

import "./components/Expenses/Expenses.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: uuid(),
    title: "Car Insurance",
    amount: 1199,
    date: moment("2020-04-24").format("YYYY MMMM D"),
  },

  {
    id: uuid(),
    title: "Bike",
    amount: 150000,
    date: moment("2020-04-28").format("YYYY MMMM D"),
  },

  {
    id: uuid(),
    title: "Mobile Recharge",
    amount: 799,
    date: moment("2021-08-14").format("YYYY MMMM D"),
  },

  {
    id: uuid(),
    title: "Mac Laptop",
    amount: 199999,
    date: moment("2021-08-14").format("YYYY MMMM D"),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;
