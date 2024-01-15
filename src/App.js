
import './App.css';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
// import Nabar from './Components/Nabar';

function App() {
 
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = async(todo) => {
    // await fetch(`http://localhost:5000/tasks/${todos.id}`, {
    //   method:'DELETE',
    // })

    setTodos(todos.filter((e) => e !== todo));
  };

  // useEffect(() => {
    // const getTodos = async()=>{
  //     const todosFromServer = await fetchTodos()
  //     setTodos(todosFromServer)
  //   }
  //   getTodos()
     
  // }, []);
  // //ftechTodos
  // const fetchTodos = async()=>{
  //   const res = await fetch('http://localhost:5000/tasks${todos.id}')
  //   const data = await res.json()
  //   return data
  // }
  const addTask =async (title, desc) => {
    const myTodo = {
      sno: todos.length + 1,
      title: title,
      description: desc,
      reminder: true,
    };
    // const res = await fetch(`http://localhost:5000/tasks${todos.id}`,   {method:'POST',
    // headers: {
    // '  Content-Type': 'application/json'
    // }, body: JSON.stringify()}) 

    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const toggleReminder = (sno) => {
    console.log('Toggling reminder for sno:', sno);
    setTodos(
      todos.map((todo) =>
        todo.sno === sno ? { ...todo, reminder: !todo.reminder } : todo
      )
    );
  };
  return (
    <>
      {/* <Nabar/> */}
    <div className="App">
    
    <Header todo={todos} onDelete={onDelete} addTask={addTask} toggleReminder={toggleReminder} />

    </div>
    </>
  );
}

export default App;
