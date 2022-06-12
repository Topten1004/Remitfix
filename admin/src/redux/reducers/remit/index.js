import  { combineReducers } from 'redux' ;

import authReducer from './auth' ;
import userReducer from './user' ;
import cryptoReducer from './crypto' ;
import notificationReducer from './notification' ;

export default combineReducers({
    auth : authReducer,
    user : userReducer,
    crypto : cryptoReducer,
    notification : notificationReducer
});