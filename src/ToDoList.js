import React from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "./store/selectors";

const ToDoList =({todos})=>{
    //const todos =[1,2,3]
    console.log(todos);
    return(
       <ul className={"todo-list"}>
           {
             todos && todos.length ?
             todos.map((todo, index) =>{
                 return(
                    <ToDo key={index} todo={todo} />
                 )
             })
             : "No todos, yay!" 
           }
       </ul>
    )
} 

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
}
export default connect(mapStateToProps)(ToDoList); 