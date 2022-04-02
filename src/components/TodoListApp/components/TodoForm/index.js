import { useState } from 'react'


export function ToDoForm(props) {
  const { onCreateNewToDo } = props;
  const defaultFormValue = {
    inputContent: '',
  }
  const [formValue, setFormValue] = useState(defaultFormValue);
  // e: Event object
  const onFormFieldChange = (fieldName, newValue) => {
    setFormValue({
      ...formValue,
      [fieldName]: newValue,
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onCreateNewToDo(formValue.inputContent);
    setFormValue(defaultFormValue);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder='enter to do'
        value={formValue.inputContent}
        onChange={(e) => { onFormFieldChange('inputContent', e.target.value) }} />
      <button type='submit'>create</button>
    </form>
  );
}
