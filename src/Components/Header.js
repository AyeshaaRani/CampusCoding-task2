import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

const Header = ({ todo, onDelete, addTask, toggleReminder }) => {
  return (
    <div>
      <h1 className="header-heading">Task Tracker</h1>
      <AddTodo addTask={addTask} />
      <Todo todo={todo} onDelete={onDelete} onToggle={toggleReminder} />
    </div>
  );
};

export default Header;
