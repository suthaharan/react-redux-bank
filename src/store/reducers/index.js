import { combineReducers } from "redux";
import accountReducer from './accountReducer';

// store is going to have a combined list of reducers 
const reducers = combineReducers({
    account: accountReducer
});

export default reducers;