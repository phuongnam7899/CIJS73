import { useState } from "react";

export const AddExpenseForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const handleTitleInputChange = (e) => {
    setTitleInput(e.target.value);
  };
  const handleAmountInputChange = (e) => {
    setAmountInput(e.target.value);
  };
  const handleAddExpense = (e) => {
    e.preventDefault();
    props.addNewExpense({ title: titleInput, amount: Number(amountInput) });
  };
  return (
    <form onSubmit={handleAddExpense}>
      <input
        value={titleInput}
        onChange={handleTitleInputChange}
        placeholder="title..."
      />
      <input
        value={amountInput}
        onChange={handleAmountInputChange}
        placeholder="amount..."
      />
      <button type="submit">Add new</button>
    </form>
  );
};
