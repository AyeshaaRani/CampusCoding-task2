import React, { useState } from 'react';

const AddTodo = ({ addTask }) => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const isAddButtonDisabled = !title.trim() ;

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title can't be empty");
    } else {
      addTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className='container'>
      <button className='Form-Button' onClick={toggleForm}>
        {showForm ? (
          <i className="fa-solid fa-xmark">Close</i>
        ) : (
          <i className="fa-solid fa-plus">Add Task</i>
        )}
      </button>
      {showForm && (
        <form className="AddTodoForm" onSubmit={submit}>
          <label htmlFor="title">Title</label>
          <input
            className='form-input'
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='What is your today task'
          />
          <br />
          <br />
          <label htmlFor="description">Description</label>
          <input
            className='form-input'
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <button className='Add-Button' type='submit' disabled={isAddButtonDisabled}>
          <i className="fa-solid fa-plus"></i>
          </button>
        </form>
      )}
      
    </div>
  );
};

export default AddTodo;
