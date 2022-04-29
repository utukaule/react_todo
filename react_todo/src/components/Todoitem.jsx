import "./item.css"

export const Todoitem = ({ todo, handlestatus, deleteitem }) => {

    return <div className="flex">
        {/* {todo.title}-{todo.status ? {color:"green"}:"Not Done"} */}

        <h3  style={todo.status ? { color: "green" } : { color: "red" }}>{todo.title}</h3>

        <button className="btn1" style={todo.status ? { color: "green" } : { color: "red" }} onClick={() => handlestatus(todo.id)}>{todo.status ? "completed" : "mark as completed"}</button>

        <button className="btn1" onClick={() => deleteitem(todo.id)}>delete</button>
    </div>
}