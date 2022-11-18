import {Todo} from "../model"
import { AiFillEdit,AiFillDelete} from 'react-icons/Ai';
import {MdDone} from 'react-icons/md'
import "./single.css"
import { useState } from "react";
type Props = {
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo,todos,setTodos}:Props) => {
    const [edit,setEdit] = useState<boolean>(false)
    const handleDone = (id:number) => {
        setTodos(todos.map(todo=>(
            todo.id === id? {...todo, isDone: !todo.isDone }: todo
        )))
        }

    const handleDelete = (id:number )=> {
        setTodos(todos.filter(todo=>(
            (todo.id !== id)
        )))
    } 
    
  return (
    <form className='todos__single'>
        { todo.isDone ? (
            <s className='todo__single-text'>{todo.todo}</s>

        ):(
            <span className='todo__single-text'>{todo.todo}</span>

        )}

            <div>
                <span className="icon" onClick={()=>handleDone(todo.id)}>    <MdDone/>       </span>
                <span className="icon">     <AiFillEdit/>   </span>
                <span className="icon"onClick={()=>handleDelete(todo.id)}>     <AiFillDelete/> </span>

            </div>
    </form>
  )
}

export default SingleTodo
