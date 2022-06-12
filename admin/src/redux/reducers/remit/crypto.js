import ActionTypes from "../../actions/remit/actionTypes";

const INITIAL_STATE = {
    cryptoList : null,
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ActionTypes.HexCryptoList :
            return ({
                ...state,
                cryptoList : action.payload
            })
        case ActionTypes.HexAddCrypto :
        case ActionTypes.HexAddCryptoError :
        case ActionTypes.HexCryptoListError :
        default : 
            return state ;
    }
}