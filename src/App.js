import React, { useState } from 'react';
import ListItem from './todo/ListItem';
import './App.css';

 export default function App() {
  const [todoName,setTodoName]=useState("");
  const [list,setList]=useState([]);
  const updateTodoName =(e)=>{
    setTodoName(e.target.value);
  };
  const addTodo=()=>{
setList([...list,{
  name: todoName,
completed:false
}]);
  setTodoName("");
  };
  const onDone =(items) =>
  {
    let newList =list.map(ListItems=>{
      if(ListItems.name===items.name){
       return {...ListItems,completed:!ListItems.completed};
      }
      return ListItems;
    })
    setList([newList]);
  };

  const onDelete = items => {
    let newList =list.filter(ListItem=>{
      if(ListItem.name === items.name)
      {
        return false;
      }
      return true;
    });
    setList(newList);
  }
  return (
    <div>
      <h1>To-Do-App</h1>
      <div className='todo-form'>
      <input type='text'placeholder='add your works here..' value={todoName} onChange={updateTodoName}/>
      <button onClick={addTodo}>Add todo</button>
      </div>
      <div className='todo-list'>
      {
        list.map(items => <ListItem obj={items} onDone={onDone} onDelete={onDelete}/>)
      }
      </div>
    </div>
  );
}


