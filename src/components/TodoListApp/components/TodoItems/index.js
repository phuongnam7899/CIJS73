export const TodoItems = (props) => {
    const {todoItems} = props;
    
    return (<>
    {
        todoItems.map((item) => {
            return <TodoItem value={item.value} done={item.done}/>
        })
    }
    </>)

}
const TodoItem = (props) => {
    const {value, done} = props;
    return <div style={{color: done ? "green" : 'red'}}>
        {value}
    </div>
}