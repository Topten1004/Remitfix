import React, { useEffect } from 'react' ;

import { connect } from 'react-redux';

import RemitHeader from './Layout/Header/RemitHeader' ;
import RemitRoutes from './Routes/RemitRoutes' ;

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        
    }
}))

const Remit = (props) => {

    const classes = useStyles() ;
    
    const {
        isAuthenticated
    } = props ;

    useEffect(() => {

    }, [isAuthenticated])
    
    return (
        <Box className={classes.root}>
            {
                isAuthenticated && <RemitHeader />
            }
            <RemitRoutes />
        </Box>
    )
}

const mapStateToProps = state => ({
    isAuthenticated : state.remit.auth.isAuthenticated
})

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Remit);