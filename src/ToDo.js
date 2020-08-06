import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "./store/action";

const ToDo = ({ todo, toggleTodo }) => {
    const {
        id, content, completed,
    } = todo;
    return (
        <li className="todo-item" onClick={() => toggleTodo(id)}>
            {completed ? "👌" : "👋"}
            <span
                className={
                    completed ? "todo-item__text--completed" : "todo-item__text"
                }
            >
                {content}
            </span>
        </li>
    );
}
export default connect(  null,
  { toggleTodo })(ToDo);