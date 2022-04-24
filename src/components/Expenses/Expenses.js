import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
