import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[toDo,setToDo] =useState([])
  const addTodo =(newTodo)=> {setToDo([...toDo,newTodo])}
  const handleTodo =(itemF)=>  {
      setToDo(toDo.filter((value)=> value !== itemF))
     }
  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList estado={toDo} handleTodo={handleTodo}/>
      </header>
    </div>
  );
}

export default App;
