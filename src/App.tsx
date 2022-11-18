import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import {Todo } from "../src/model"
const App:React.FC = ()=> {
  const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent) =>{
      e.preventDefault();
      if(todos.length){
        setTodos([...todos, {id: Date.now(), todo:todo, isDone:false}]);

      }
    }
  return (
    <div className="App">
        <span className='heading'>Tasks</span>
       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
      
  )
}

export default App
