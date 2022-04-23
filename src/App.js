import React from "react";

import moment from "moment";
import { v4 as uuid } from "uuid";

import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";

import "./components/Expenses.css";

const App = () => {
  const expense = [
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

  return (
    <Card className="expenses">
      {expense.map((value) => {
        return <ExpenseItem expenseItems={value} />;
      })}
    </Card>
  );
};

export default App;
