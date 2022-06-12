import React from 'react' ;

import AddNotificationForm from '../../../components/Remit/AddNotification/AddNotificatiionForm';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        height : 'calc(100vh - 55px)',

        paddingLeft : "20px",
        paddingRight : '20px',

        paddingTop : "40px",
        paddingBottom : "40px",

        overflow : 'hidden' ,
        overflowY : 'scroll'
    },
}))
const AddNotification = () => {

    const classes = useStyles() ;
    
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <AddNotificationForm />
                </Grid>
            </Grid>
        </Box>
    )
}
export default AddNotification ;