import { useState } from "react";

export const AddExpenseSection = (props) => {
  const {onAddNewExpense} = props;

  const [showForm, setShowForm] = useState(false);
  const defaultFormValue = {
    amount: "",
    name: "",
    date: "",
  };
  const [formValue, setFormValue] = useState(defaultFormValue);
  // e: Event object
  const onFormFieldChange = (fieldName, newValue) => {
    setFormValue({
      ...formValue,
      [fieldName]: newValue,
    });
  };

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleHideForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddNewExpense(formValue)
    setFormValue(defaultFormValue);
  }

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Name</label>
            <input
              placeholder="Enter name"
              value={formValue.name}
              onChange={(e) => {
                onFormFieldChange("name", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              placeholder="Enter amount"
              type="number"
              value={formValue.amount}
              onChange={(e) => {
                onFormFieldChange("amount", e.target.value);
              }}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              placeholder="Enter date"
              type="date"
              value={formValue.date}
              onChange={(e) => {
                onFormFieldChange("date", e.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit">Add</button>
            <button onClick={handleHideForm}>Cancel</button>
          </div>
        </form>
      ) : (
        <button onClick={handleShowForm}>Add new expense</button>
      )}
    </div>
  );
};
