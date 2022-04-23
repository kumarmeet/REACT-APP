import React from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expense.map((value) => {
        return <ExpenseItem expenseItems={value} key={value.id} />;
      })}
    </Card>
  );
};

export default Expenses;
