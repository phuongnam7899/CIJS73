import { useState } from "react";
import { AddExpenseForm } from "./AddExpenseForm";
import { Card } from "./Card";
import { ExpensesList } from "./ExpensesList";

// Expense App
export const Revision = () => {
  const [expenses, setExpenses] = useState([
    {
      title: "Buy Books",
      amount: 100,
    },
  ]);
  const addNewExpense = (newExpenseInfo) => {
    setExpenses([...expenses, newExpenseInfo]);
  };
  return (
    <>
      <Card>
          <div>Hello</div>
      </Card>
      <Card>
          <img src="https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x900.jpg"/>
      </Card>
      <AddExpenseForm addNewExpense={addNewExpense}/>
      <ExpensesList expenses={expenses}/>
    </>
  );
};
