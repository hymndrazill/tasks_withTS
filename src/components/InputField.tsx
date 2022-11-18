import "./inputfield.css"

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:  (e: React.FormEvent)=>void;
}

const InputField: React.FC<Props> = ({ todo, setTodo,handleAdd}) => {
  return (
    <form className='input'>
        <input className='input__box' type="input" placeholder='Write down your task.'
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button 
        className='input__submit' 
        onSubmit={handleAdd}
        type="submit">Add Task
        </button>
    </form>
  )
}

export default InputField
