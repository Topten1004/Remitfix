import ActionTypes from "../../actions/remit/actionTypes";

const INITIAL_STATE = {
    error : null,
    notificationList : null
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.HexNotificationList :
            return ({
                ...state,
                notificationList : action.payload
            })
        case ActionTypes.HexAddNotification :
        case ActionTypes.HexNotificationListError :
        case ActionTypes.HexAddNotificationError :
        default : 
            return state ;
    }
}