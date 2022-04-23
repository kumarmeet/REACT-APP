import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expenseItems.title);

  const clickHandler = () => {
    setTitle("Clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseItems.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          Rs.{props.expenseItems.amount}/-
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
