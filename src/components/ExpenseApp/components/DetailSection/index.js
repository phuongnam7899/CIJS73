import { useState } from "react";
import { ExpensesList, MonthsStat } from "./components";

export const DetailSection = (props) => {
  const { expenses } = props;
  const [selectedYear, setSelectedYear] = useState(2021);
  const handleChangeYear = (e) => {
      setSelectedYear(e.target.value)
  }
  const yearExpenses = expenses.filter((expense) => {
      return new Date(expense.date).getFullYear() === Number(selectedYear)
  })
  return (
    <div>
      <div>
        <span>Filter by year</span>
        <select value={selectedYear} onChange={handleChangeYear}>
          {[2021, 2022, 2023].map((year) => {
            return <option value={year}>{year}</option>;
          })}
        </select>
      </div>
      <MonthsStat expenses={yearExpenses} />
      <ExpensesList expenses={yearExpenses} />
    </div>
  );
};
