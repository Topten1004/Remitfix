import React from "react";

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : "100px",
        display : "flex" ,
        alignItems : 'center',
        justifyContent : 'center',

        flexDirection : 'column',

        width : '100%',
        height : '100%',

        "& .MuiGrid-item" : {
            textAlign : 'center',
            fontSize : '14px'
        }
    },
    site : {
        fontSize : '20px',
        fontWeight : 'bold',
        paddingBottom : '15px'
    },
    panel : {
        backgroundColor : 'white',

        width : "300px",
        height : '180px',

        display : 'flex',
        alignItems:'center',
        justifyContent : 'center',

        flexDirection : 'column'
    },
    error : {
        fontSize : '18px !important',
        fontWeight : 'bold',
        color : 'red'
    },
}))
const NotFound = () => {
    const classes = useStyles() ;
    return (
        <Box className={classes.root}>
            <Box className={classes.site}>
                CA1 Blockchain App Admin
            </Box>
            <Box className={classes.panel}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.error}>
                        Page Not Found
                    </Grid>
                    <Grid item xs={12}>
                        Sorry, we couldn't find the page.
                    </Grid>
                    <Grid item xs={12}>
                        Please check the URL and try again.
                    </Grid>
                    <Grid item xs={12}>
                        (Error code 404)
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

NotFound.propTypes = {

};

export default NotFound;
