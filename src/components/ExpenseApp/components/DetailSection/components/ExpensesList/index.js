export const ExpensesList = (props) => {
    const {expenses} = props;
    console.log(expenses);
    return <div>
        {
            expenses.map((expense) => {
                return <div>
                    <span style={{margin: '0 8px'}}>{expense.date}</span>
                    <span style={{margin: '0 8px'}}>{expense.name}</span>
                    <span style={{margin: '0 8px'}}>{expense.amount}</span>
                </div>
            })
        }
    </div>
}