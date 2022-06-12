import  { combineReducers } from 'redux' ;

import remitReducer from './remit' ;

export default combineReducers({
    remit : remitReducer,
});