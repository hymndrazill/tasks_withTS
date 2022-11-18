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
    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleEdit = ( e : React.FormEvent, id:number ) => {
        e.preventDefault();
        setTodos(todos.map(todo=>(
            todo.id === id ? {...todo, todo: editTodo }: todo
        )))
        setEdit(!edit);
    } 

    const handleDone = (id:number) => {
        setTodos(todos.map(todo=>(
            todo.id === id? {...todo, isDone: !todo.isDone }: todo
        ))
        );
        setEdit(false);

    }

    const handleDelete = (id:number )=> {
        setTodos(todos.filter(todo=>(
            (todo.id !== id)
        )))
    } 
    
    
  return (
    <form  onSubmit={(e)=>handleEdit(e,todo.id)} className='todos__single'>
        { edit ? (
            <input 
            className="todos__single-text"
            type="text" placeholder="Edit Your Task" 
            value={editTodo} 
            onChange={(e)=>setEditTodo(e.target.value)}/>
        )   : (
             todo.isDone ? (
                <s className='todo__single-text'>{todo.todo}</s>
            ):
            (
                <span className='todo__single-text'>{todo.todo}</span>
            )
        )
            }
            <div>
                <span className="icon" onClick={()=>handleDone(todo.id)}>    <MdDone/>       </span>
                <span className="icon"   onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}> 
                <AiFillEdit/>     
                </span>
                <span className="icon"onClick={()=>handleDelete(todo.id)}>     <AiFillDelete/> </span>

            </div>
    </form>
  )
}

export default SingleTodo
