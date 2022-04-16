export const ExpenseItem = (props) => {
    return <div className="expense-item">
    <div className="expense-title">{props.title}</div>
    <div className="expense-amount">{props.amount}$</div>
</div>
}