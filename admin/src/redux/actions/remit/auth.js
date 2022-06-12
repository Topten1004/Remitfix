
import ActionTypes from './actionTypes';

import * as config from '../../../static/constants';

import axios from 'axios' ;

import { setCookie, eraseCookie, errorHandler } from '../../../utils/Helper';

export const SignInRemit = (adminInfo, navigate) => async dispatch => {
    try {
        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}auth/signin` , {
            email : adminInfo.email,
            password : adminInfo.password
        })
        
        if(res.status === 200) {
            setCookie('hex_access_token', res.data.access_token) ;
            setCookie('user_id', res.data.user_id);

            dispatch({
                type : ActionTypes.HexSignIn,
                payload : {
                    user_id : res.data.user_id,
                    accessToken : res.data.access_token
                }
            })

            navigate('/Remit/user');
        }
    } catch(err) {
        console.log(errorHandler(err)) ;
        return dispatch({
            type : ActionTypes.HexSignInError
        })
    }
}

export const SignOut = (navigate) => async dispatch => {
    
    eraseCookie('hex_access_token');
    eraseCookie('user_id') ;

    dispatch({
        type : ActionTypes.HexSignOut
    })

    navigate('/') ;
}