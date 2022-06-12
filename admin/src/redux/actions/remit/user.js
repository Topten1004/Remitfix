
import ActionTypes from "./actionTypes";
import * as config from '../../../static/constants' ;
import { authorization, errorHandler } from "../../../utils/Helper";
import axios from "axios";


export const UserList = () => async dispatch => {
    try {

        console.log('User List') ;
        
        const header = authorization('hex') ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}user/userlist`, {} , header) ;

        if(res.status === 200){
            return dispatch({
                type : ActionTypes.HexUserList,
                payload : res.data.userList
            })
        }
    } catch(err) {
        if(err.response.status === 403) {
            console.log(err.response.data.message) ;

            return dispatch({
                type : ActionTypes.HexUserListError
            })
        }
    }
}

export const DeleteUser = (_id) => async dispatch => {
    try {
        console.log('Delete User') ;

        const header = authorization('hex') ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}user/deleteUser`, {
            _id : _id,
        } , header) ;

        if(res.status === 200) {
            dispatch({
                type : ActionTypes.HexDeleteUser
            })

            return true;
        }

        return false ;
    } catch(err) {
        console.log(errorHandler(err)) ;
        return dispatch({
            type : ActionTypes.HexDeleteUserError
        })
    }
}

export const UpdateUserProfile = (data, navigate) => async dispatch => {
    try {
        const header = authorization('hex') ;

        console.log(data) ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}user/updateUserProfile`, data , header) ;

        if(res.status === 200) {
            navigate("/Remit/user") ;
        }
    } catch(err) {
        console.log(errorHandler(err)) ;
        return dispatch({
            type : ActionTypes.HexUpdateUserProfileError
        })
    }
}

export const CreateUserProfile = (user_id, data, navigate) => async dispatch => {
    try {
        const header = authorization('hex') ;

        console.log(data) ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}user/createUserProfile`, {
            ...data,
            user_id : user_id
        } , header) ;

        if(res.status === 200) {
            navigate("/Remit/user") ;
        }
    } catch(err) {
        console.log(errorHandler(err)) ;
        return dispatch({
            type : ActionTypes.HexCreateUserProfileError
        })
    }
}