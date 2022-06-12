


import axios from  'axios' ;
import ActionTypes from './ActionTypes' ;
import { PRIVATE_BACKEND_API } from '../../static/constant' ;

export const GetTransfers = () => async dispatch => {
    let res = await axios.get(`${PRIVATE_BACKEND_API}trans_infor` , {}) ;
    console.log(res.data);
    return dispatch({
        type : ActionTypes.GET_TRANSFERS ,
        payload : res.data
    })
}