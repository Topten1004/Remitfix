import React, { memo } from "react";

import { Routes , Route, Navigate } from "react-router-dom";
import Forgot from "../../pages/Forgot";

import NotFound from '../Common/NotFound';

import Remit from "../Remit";

import Resetpass from "../../pages/Resetpass";

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Remit />} />
                <Route path={'/forgot'} element={<Forgot />} />
                <Route path={'/resetpass'} element={<Resetpass />} />
                <Route path={"/*"} element={<NotFound/>} />
            </Routes>
        </>
    );
}

MainRoutes.propTypes = {

};

export default memo(MainRoutes);
