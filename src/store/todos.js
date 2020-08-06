import {ADD_TODO , TOGGLE_TODO, SET_FILTER} from "./actionTypes";

const initialState ={
    allIds :[],
    byIds : {}
}
export default function(state = initialState, action){
    switch(action.type){
        case ADD_TODO:{
            const {id, content} = action.payload;
            console.log({checkIds: id , contentValue : content })
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false,
                    },
                },
            };
        }
        default: return state;
    }
}