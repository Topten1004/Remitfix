import React, { memo } from "react";

import { Routes , Route } from "react-router-dom";

import ProtectedRoute from "../../utils/ProtectedRoute";

// Pages
import NotFound from '../Common/NotFound';
import User from '../../pages/Remit/User' ;
import UpdateUser from '../../pages/Remit/UpdateUser';
import Crypto from '../../pages/Remit/Crypto' ;
import AddCrypto from "../../pages/Remit/AddCrypto";
import Notification from '../../pages/Remit/Notification' ;
import AddNotification from "../../pages/Remit/AddNotification";
import Login from '../../pages/Login';
import Forgot from '../../pages/Forgot';
import Resetpass from "../../pages/Resetpass";

const RemitRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Login to="hex"/>} />
            <Route path={'/forgot'} element={<Forgot to = "hex"/>} />
            <Route path={'/resetpass'} element = {<Resetpass />} />
            <Route element={<ProtectedRoute protect='hex' />}>
                <Route path={"/user"}  element={<User />}/>
                <Route path={"/updateuser"}  element={<UpdateUser />}/>
                
                <Route path={'/crypto'} element={<Crypto />} />
                <Route path={'/addcrypto'} element={<AddCrypto />} />
                
                <Route path={'/notification'} element={<Notification />} />
                <Route path={'/addnotification'} element={<AddNotification />} />
            </Route>
            <Route path='/*' element={<NotFound />} />
        </Routes>
    );
}

RemitRoutes.propTypes = {

};

export default memo(RemitRoutes);
