
import ActionTypes from "../../actions/remit/actionTypes";

const INITIAL_STATE = {
   userList : null
}

export default (state=INITIAL_STATE , action) => {
    switch(action.type){
        case ActionTypes.HexUserList:
            return ({
                ...state,
                userList : action.payload
            })
        case ActionTypes.HexUserListError :
        default :
            return state ;
    }
}