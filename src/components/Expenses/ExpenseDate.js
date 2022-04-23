import React from "react";

import Card from "../UI/Card";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const splitDate = {
    year: props.date.split(" ")[0],
    month: props.date.split(" ")[1],
    date: props.date.split(" ")[2],
  };

  return (
    <Card className="expense-date">
      <div className="expense-date__day">{splitDate.date}</div>
      <div className="expense-date__month">{splitDate.month}</div>
      <div className="expense-date__year">{splitDate.year}</div>
    </Card>
  );
};

export default ExpenseDate;
