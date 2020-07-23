import React,{useState} from "react";
import {addToDo} from "./store/action";
import { connect } from 'react-redux';

const AddToDo =(props) =>{
    const [toDoInitialValue, setToDoValue] = useState("");

    const handleTextChanges=(input) =>{
        setToDoValue(input);
    }

    const handleAddToDo =() =>{
        props.addToDo(toDoInitialValue);
        setToDoValue("")
    }

    return(
        <div>
            <input 
                onChange ={(e) =>handleTextChanges(e.target.value)}
                value={toDoInitialValue}
                placeholder="Enter your tasks"
            />
            <button  className="add-todo" onClick={handleAddToDo}>
                Add ToDo
            </button>
        </div>
    )
}
export default connect(null, {addToDo})(AddToDo);