import React from "react";

const ToDoList =({todos})=>{
    //const todos =[1,2,3]
    return(
       <ul className={"todo-list"}>
           {
             todos && todos.length ?
             todos.map((todo, index) =>{
                 return(
                    <li key={index}>Priya</li> 
                 )
             })
             : "No todos, yay!" 
           }
       </ul>
    )
} 
export default ToDoList;