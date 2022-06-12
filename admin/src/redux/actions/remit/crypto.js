
import ActionTypes from "./actionTypes";
import axios from "axios";
import { authorization, errorHandler } from "../../../utils/Helper";
import * as config from "../../../static/constants";

export const CryptoList = () => async dispatch => {
    try{
        console.log("Crypto List") ;

        const header = authorization('hex') ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}crypto/cryptoList` , {}, header) ;

        if(res.status === 200){
            return dispatch({
                type : ActionTypes.HexCryptoList,
                payload : res.data.cryptoList
            })
        }

    } catch(err){
        console.log(err) ;
        return dispatch({
            type : ActionTypes.HexCryptoListError
        })
    }
}

export const AddCrypto = (cryptoInfo, navigate) => async dispatch => {
    try {
        console.log("Add Crypto" , cryptoInfo) ;

        const header = authorization('hex') ;

        const fn = new FormData() ;

        fn.append('name', cryptoInfo.name);
        fn.append('symbol', cryptoInfo.symbol);
        fn.append('decimal', cryptoInfo.decimal);
        fn.append('pair', cryptoInfo.pair);
        fn.append('deposit_fee', cryptoInfo.deposit_fee);
        fn.append('transfer_fee', cryptoInfo.transfer_fee);
        fn.append("logo", cryptoInfo.logo);
        fn.append("paper", cryptoInfo.paper);

        // console.log(fn.values());
        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}/crypto/addcrypto` , fn , header) ;

        if(res.status === 200) {
            navigate('/Remit/crypto') ;
        }

    } catch(err) {

        console.log(errorHandler(err)) ;

        return dispatch({
            type : ActionTypes.HexAddCryptoError
        })
    }
}

export const DeleteCrypto = (_id) => async dispatch => {
    try {
        console.log('Delete Crypto') ;

        const header = authorization('hex') ;

        let res = await axios.post(`${config.PRIVATE_CA1HEX_ADMIN_API}/crypto/deletecrypto`,{
            _id : _id
        }, header) ;

        if(res.status === 200) {

            console.log(res.data) ;
            
            dispatch({
                type : ActionTypes.HexDeleteCrypto,
            });

            return true ;
        }

        return false ;
    } catch(err){
        console.log(errorHandler(err)) ;
        return dispatch({
            type : ActionTypes.HexDeleteCryptoError
        })
    }
}