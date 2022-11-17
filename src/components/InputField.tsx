import "./inputfield.css"

const InputField = () => {
  return (
    <form className='input'>
        <input className='input__box' type="input" placeholder='Write down your task.' />
        <button className='input__submit' type="submit">Add Task</button>
    </form>
  )
}

export default InputField
