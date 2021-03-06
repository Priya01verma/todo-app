import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter"

const RootReducer = combineReducers({
    todos,
    visibilityFilter
});

export default RootReducer;