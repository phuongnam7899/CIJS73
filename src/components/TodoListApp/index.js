import { useState } from 'react'
import { ToDoForm, TodoItems } from './components';

export const ToDoListApp = () => {
    const [todoItems, setToDoItems] = useState([{value: 'hw', done: true}, {value: 'shopping', done: true}])
  const handleCreateNewToDo = (newToDoValue) => {
    setToDoItems([
      ...todoItems,
      {
        value: newToDoValue,
        done: false
      }
    ])
  }
  return (
    <>
      <ToDoForm onCreateNewToDo={handleCreateNewToDo}/>
      <TodoItems todoItems={todoItems}/>
    </>
  );
}