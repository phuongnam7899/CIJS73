import { ProgressBar } from "../ProgressBar";

export const MonthsStat = (props) => {
  const { expenses } = props;
  const monthsNames = ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const calculateExpensesAmount = (expensesToCal) => {
    return expensesToCal.reduce((total, expense) => {
      return total + Number(expense.amount);
    }, 0);
  };
  const totalExpensesAmount = calculateExpensesAmount(expenses);
  const getMonthPercentage = (month) => {
    const monthExpenses = expenses.filter((expense) => {
      const expenseMonth = new Date(expense.date).getMonth() + 1;
      return expenseMonth === month;
    });

    return monthExpenses.length > 0
      ? (calculateExpensesAmount(monthExpenses) / totalExpensesAmount) * 100
      : 0;
  };

  return (
    <div style={{ display: "flex" }}>
        {
            monthsNames.map((month, index) => {
                return <span key={index}><ProgressBar key={index} label={month} percentage={getMonthPercentage(index + 1)} /></span>
            })
        }
    </div>
  );
};
