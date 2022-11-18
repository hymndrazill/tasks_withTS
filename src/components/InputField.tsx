import { useRef } from "react";
import "./inputfield.css"

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:  (e: React.FormEvent)=>void;
}

const InputField: React.FC<Props> = ({ todo, setTodo,handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input'  onSubmit={(e)=>{
        inputRef.current?.blur()
        handleAdd(e)}}>
        <input
        ref={inputRef}
        className='input__box' type="input" placeholder='Write down your task.'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button 
        className='input__submit' 
        type="submit">Add Task
        </button>
    </form>
  )
}

export default InputField
