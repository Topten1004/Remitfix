import { getCookie, isAuthenticated } from "../../../utils/Helper";
import ActionTypes from "../../actions/remit/actionTypes";


const INITIAL_STATE = {
    isAuthenticated : !isAuthenticated('hex_access_token') ? false : true,
    accessToken : !isAuthenticated('hex_access_token') ? null : getCookie('hex_access_token'),
    userInfo : {
        user_id : !isAuthenticated('hex_access_token') ? null : getCookie('user_id'),
    },
    error : null ,
}

export default (state=INITIAL_STATE , action) => {
    switch(action.type){
        case ActionTypes.HexSignIn:
            return ({
                ...state,
                isAuthenticated : true,
                userInfo : {
                    user_id : action.payload.user_id
                },
                accessToken : action.payload.accessToken
            })
        case ActionTypes.HexSignOut : 
            return ({
                ...state,
                isAuthenticated : false ,
                userInfo : {
                    user_id : null
                },
                accessToken : null
            })
        default :
            return state ;
    }
}