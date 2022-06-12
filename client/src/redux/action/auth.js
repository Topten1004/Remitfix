


import axios from 'axios';
import ActionTypes from './ActionTypes';
import { PRIVATE_BACKEND_API } from '../../static/constant';

export const SignIn = (email, password) => async dispatch => {
    try {
        let res = await axios.post(`${PRIVATE_BACKEND_API}login`, {
            email: email,
            password: password
        });

        if (res.data.msg === "Login success!") {
            return dispatch({
                type: ActionTypes.SIGNIN_SUCCESS,
                payload: "Success"
            })
        } else {
            return dispatch({
                type: ActionTypes.SIGNIN_ERROR,
                payload: "Error"
            })
        }
    }
    catch (err) {
        console.log(err);

        return dispatch({
            type: ActionTypes.SIGNIN_ERROR,
            payload: "Error"
        })
    }
}

export const SignUp = (email, password, country, role) => async dispatch => {
    try {
        let res = await axios.post(`${PRIVATE_BACKEND_API}register`, {
            email: email,
            password: password,
            country : country, 
            role : role,
        });

        if (res.data.msg === "Signup success!") {
            return dispatch({
                type: ActionTypes.SIGNUP_SUCCESS,
                payload: "Success"
            })
        } else {
            return dispatch({
                type: ActionTypes.SIGNUP_ERROR,
                payload: "Error"
            })
        }
    }
    catch (err) {
        console.log(err);

        return dispatch({
            type: ActionTypes.SIGNUP_ERROR,
            payload: "Error"
        })
    }
}

export const sendGoogleToken = tokenId => {
    console.log("Google:", tokenId);
    axios
        .post(`${PRIVATE_BACKEND_API}googlelogin`, {
            idToken: tokenId
        })
        .then(res => {
            console.log(res.data);
            if(res.data === "")
            {
                return dispatch({
                    type: ActionTypes.GOOGLE_LOGIN_ERROR,
                    payload: "GOOGLE_LOGIN_ERROR"
                })
            }
            else{
                informParent(res);                
                return dispatch({
                    type: ActionTypes.GOOGLE_LOGIN_SUCCESS,
                    payload: "GOOGLE_LOGIN_SUCCESS"
                })
            }
        })
        .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
        });
};

export const sendFacebookToken = (userID, accessToken) => {
    axios
      .post(`${PRIVATE_BACKEND_API}facebooklogin`, {
        userID,
        accessToken
      })
      .then(res => {
        console.log(res.data);
        if(res.data === "")
        {
            return dispatch({
                type: ActionTypes.FACEBOOK_LOGIN_ERROR,
                payload: "ERROR"
            })
        }
        else {
            informParent(res);
            return dispatch({
                type: ActionTypes.FACEBOOK_LOGIN_SUCCESS,
                payload: "SUCCESS"
            })
        }
      })
      .catch(error => {
        console.log('FACEBOOK SIGNIN ERROR', error.response);
      });
  };