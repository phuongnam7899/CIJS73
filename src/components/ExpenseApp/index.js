import { useState } from "react";
import { AddExpenseSection, DetailSection } from "./components";

export const ExpenseApp = () => {
  const [expenses, setExpenses] = useState([
    {
      name: "Some books",
      amount: 50,
      date: "2022-1-1",
    },
  ]);
  const handleAddNewExpense = (newExpenseInfo) => {
    setExpenses([...expenses, newExpenseInfo]);
  };
  return (
    <div>
      <AddExpenseSection onAddNewExpense={handleAddNewExpense} />
      <DetailSection expenses={expenses}/>
    </div>
  );
};
