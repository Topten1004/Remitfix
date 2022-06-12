

import { combineReducers } from "redux";

import authReducer from './auth' ;
import transferReducer from './transfer';

export default combineReducers({
    auth : authReducer,
    transfer : transferReducer
}) ;