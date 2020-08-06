import {ADD_TODO , TOGGLE_TODO, SET_FILTER} from "./actionTypes";

let nextToDoId = 0;

export const addToDo = content =>(
    {
        type : ADD_TODO,
        payload: {
            id: ++nextToDoId,
            content
          }
    }
)

export const toggleToDo = id =>(
    {
        type : TOGGLE_TODO,
        payload: { id }
    }
)

export const setFilter =(filter) =>(
    {
        type : SET_FILTER,
        payload: { filter }
    }
)