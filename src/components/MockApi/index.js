import { useEffect, useState } from "react";
import { createNewExpense, fetchExpense } from "../../proxies/expensesProxies";
import { ExpensesList } from "./ExpensesList";

export const MockApi = () => {
  const [expenses, setExpenses] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [titleInputValue, setTitleInputValue] = useState("");
  const [amountInputValue, setAmountInputValue] = useState(0);

  const getExpensesByFilter = async (filter) => {
      const allExpenses = await fetchExpense(filter);
      setExpenses(allExpenses);
  }

  useEffect(() => {
    getExpensesByFilter({title: 'hello'})
  }, []);
  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
            getExpensesByFilter({ title: inputValue });
        }}
      >
        Search
      </button>
      <ExpensesList expenses={expenses} />
      <hr/>
      <input
      placeholder="title"
        value={titleInputValue}
        onChange={(e) => {
            setTitleInputValue(e.target.value);
        }}
      />
      <input
      placeholder="amount"
        value={amountInputValue}
        onChange={(e) => {
            setAmountInputValue(Number(e.target.value));
        }}
      />
      <button onClick={() => {
          createNewExpense({
              title: titleInputValue,
              amount: amountInputValue,
          })
      }}>Create</button>
    </>
  );
};
