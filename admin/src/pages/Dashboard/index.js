import React from 'react' ;

import Headers from '../../components/Layout/Header/RemitHeader/index'

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        height : 'calc(100vh - 55px)',

        paddingLeft : "10px",
        paddingRight : '10px',

        paddingTop : "40px",
        paddingBottom : "40px",

        overflow : 'hidden' ,
        overflowY : 'scroll'
    },
}))
const Mainpage = () => {

    const classes = useStyles() ;
    
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Headers />
                </Grid>
            </Grid>
        </Box>
    )
}
export default Mainpage ;