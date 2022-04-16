import { ExpenseItem } from "../ExpenseItem";
import "./styles.css";

export const ExpensesList = (props) => {
  return (
    <div>
      {props.expenses.map((item) => {
        return <ExpenseItem title={item.title} amount={item.amount}/>;
      })}
    </div>
  );
};
