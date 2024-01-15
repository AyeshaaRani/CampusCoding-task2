import React from 'react'
import PropTypes from 'prop-types'
const Todo = ({ todo, onDelete , onToggle}) => {
    return (
        <div className='todo-list' >
           
            <h1>Your Todo List</h1>
            
           {todo.length===0? "No todos to Display":todo.map((todo) => (
                    <div className={`todo-list ${todo.reminder? 'reminder': ''}`} onDoubleClick={onToggle} key={todo.sno }>
                        <h4 className='todo-title'>{todo.title}
                        </h4>
                        <p className='todo-description'>{todo.description} <i onClick={() => onDelete(todo)} className="fa-solid fa-trash"></i>  </p>

                    </div>
                  
                ))
            }
</div>
        
    )
}

Todo.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string


};
Todo.defaultProps = {
    title: "Todo",

}

export default Todo