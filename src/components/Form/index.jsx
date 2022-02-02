import { useState } from "react"
const Form =({addTodo})=>{
    const [nameInput,setNameInput] = useState("")
    const eventTodo =(event) =>setNameInput(event.target.value)
    const btnClick = () => addTodo(nameInput)
    
    return(
            <div >
                <input type="text" onChange={eventTodo} />
                <button onClick={btnClick}>Enviar</button>
            </div>    
    )
}
export default Form