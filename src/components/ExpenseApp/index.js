import { useState } from "react";
import { AddExpenseSection, DetailSection } from "./components";

export const ExpenseApp = () => {
  const [expenses, setExpenses] = useState([]);
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
