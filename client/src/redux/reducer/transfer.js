

import ActionTypes from "../action/ActionTypes";

const INITIAL_STATE = {
    message : [],
    flag : 0
}

export default (state=INITIAL_STATE , action) => {
    switch(action.type) {
        case ActionTypes.GET_TRANSFERS :
            return {
                ...state ,
                message : action.payload,
                flag : 1
            }
        case ActionTypes.GET_TRANSFERS_ERROR :
            return {
                ...state ,
                message : action.payload
            }
        default :
            return state ;
    }
}