import React from "react";
export default function ListItem(props)
{
    return (
        <div className="todo-item">
        <div className={props.obj.completed && "completed"}>
            <p>{props.obj.name}</p>
            <button onClick={()=>
            props.onDelete(props.obj)}>Delete</button>
        </div>
        </div>
    );
}