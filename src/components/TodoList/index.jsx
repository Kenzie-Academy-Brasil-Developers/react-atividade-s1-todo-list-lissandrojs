const TodoList =({estado,handleTodo})=>{
    return (
       
            <ul>
                {estado.map((item,index)=> (
                    <li key={item}>{item} <button onClick={()=> handleTodo(item)}> Concluir Tarefa</button></li>
                   
                ))}
            </ul>

    )
}
export default TodoList