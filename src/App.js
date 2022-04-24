import React from "react";

import moment from "moment";
import { v4 as uuid } from "uuid";

import "./components/Expenses/Expenses.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: uuid(),
      title: "Car Insurance",
      amount: 1199,
      date: moment().format("YYYY MMMM D"),
    },

    {
      id: uuid(),
      title: "Bike",
      amount: 150000,
      date: moment().format("YYYY MMMM D"),
    },

    {
      id: uuid(),
      title: "Mobile Recharge",
      amount: 799,
      date: moment().format("YYYY MMMM D"),
    },

    {
      id: uuid(),
      title: "Mac Laptop",
      amount: 199999,
      date: moment().format("YYYY MMMM D"),
    },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
    expenses.push(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;
