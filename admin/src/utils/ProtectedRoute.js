import React from 'react' ;

import { Navigate , Outlet } from 'react-router-dom';

import { isAuthenticated } from './Helper';

const ProtectedRoute = (props) => {
    const {
        protect
    } = props ;

    let access_token_name = '' ;

    switch(protect){
        case 'hex' :
            access_token_name = 'hex_access_token';
            break;
        case 'dex':
            access_token_name = 'dex_access_token' ;
            break;
        case 'swap' :
            access_token_name = 'swap_access_token' ;
            break;
        case 'remit' :
            access_token_name = 'remit_access_token' ;
            break;
        default :
            break ;
    }

    if (!protect || !isAuthenticated(access_token_name)) {
      return <Navigate to={`/`} />;
    }
    return <Outlet />;
}

export default ProtectedRoute ;