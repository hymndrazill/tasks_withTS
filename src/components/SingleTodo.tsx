import {Todo} from "../model"
import { AiFillEdit,AiFillDelete} from 'react-icons/Ai';
import {MdDone} from 'react-icons/md'
import "./single.css"
type Props = {
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo,todos,setTodos}:Props) => {
  return (
    <form className='todos__single'>
            <span className='todo__single-text'>{todo.todo}</span>

            <div>
                <span className="icon"><MdDone/></span>
                <span className="icon"><AiFillEdit/></span>
                <span className="icon"><AiFillDelete/></span>

            </div>
    </form>
  )
}

export default SingleTodo
