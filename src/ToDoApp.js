import React from 'react';
import "./styles.css";
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';


const ToDoApp =() =>{
    return(
        <div className="todo-app">
            <h2>ToDo List</h2>
            <AddToDo/>
            <ToDoList />
        </div>
    )
}
export default ToDoApp;