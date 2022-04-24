import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expense.filter((expense) => {
    return filteredYear === expense.date.split(" ")[0]; //get only year
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.map((value) => {
          return <ExpenseItem expenseItems={value} key={value.id} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
