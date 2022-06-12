

import ActionTypes from "../action/ActionTypes";

const INITIAL_STATE = {
    message: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                message: action.payload
            }
        case ActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                message: action.payload
            }
        case ActionTypes.GOOGLE_LOGIN_SUCCESS:
            return {
                ...state,
                message: action.payload
            }
        case ActionTypes.GOOGLE_LOGIN_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case ActionTypes.FACEBOOK_LOGIN_SUCCESS:
            return {
                ...state,
                message: action.payload
            }
        case ActionTypes.FACEBOOK_LOGIN_ERROR:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
}