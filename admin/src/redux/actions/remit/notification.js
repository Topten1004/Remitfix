
import ActionTypes from "./actionTypes";
import axios from "axios";
import { authorization, errorHandler } from "../../../utils/Helper";
import * as config from "../../../static/constants";

export const NotificationList = () => async dispatch => {
    try {

        console.log('Notification List') ;
        
        const header = authorization('hex') ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}notification/notificationList`, {} , header) ;

        if(res.status === 200){
            return dispatch({
                type : ActionTypes.HexNotificationList,
                payload : res.data.notificationList
            })
        }
    } catch(err) {
        console.log(errorHandler(err)) ;

        return dispatch({
            type : ActionTypes.HexNotificationListError,
        })
    }
}

export const AddNotification = (title, description, navigate) => async dispatch => {
    try {
        console.log("Add Notification") ;

        const header = authorization('hex') ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}/notification/addNotification` , {
            title : title,
            description : description
        } , header) ;

        if(res.status === 200) {
            dispatch({
                type : ActionTypes.HexAddNotification
            })
            navigate('/Remit/notification') ;
        }

    } catch(err) {

        console.log(errorHandler(err)) ;

        return dispatch({
            type : ActionTypes.HexAddNotificationError
        })
    }
}

export const DeleteNotification = (_id) => async dispatch => {
    try {
        console.log("Delete Notification") ;

        const header = authorization('hex') ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}/notification/deleteNotification` , {
            _id : _id
        } , header) ;

        if(res.status === 200) {
            dispatch({
                type : ActionTypes.HexDeleteNotification
            })
            return true ;
        }

        return false ;

    } catch(err) {

        console.log(errorHandler(err)) ;

         dispatch({
            type : ActionTypes.HexDeleteNotificationError
        })
    }
}
