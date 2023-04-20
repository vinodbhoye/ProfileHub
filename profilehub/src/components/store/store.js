import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState={
    users:[]
    
};

function reducer(state=initialState,action){
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users:action.payload
            };
    
        default:
            return state;
    }
}

const store=createStore(reducer,applyMiddleware(thunk));

export default store;