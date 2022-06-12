import React, { useEffect, useState } from 'react' ;

import { useLocation, useNavigate } from 'react-router-dom';

import UpdateUserForm from '../../../components/Remit/UpdateUser/UpdateUserForm';
import UpdateProfileForm from '../../../components/Remit/UpdateUser/UpdateProfileForm';

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
    username : {
        textAlign : 'center',
        fontSize : '30px',
        fontWeight : 600
    }
}))
const UpdateUser = () => {

    const classes = useStyles() ;
    
    const [username, setUserName] = useState(null) ;

    const location = useLocation() ;
    const navigate = useNavigate() ;

    useEffect(() => {
        if(!location.state) {
            navigate('/Remit/user') ;
        } else {
            if(location.state.userInfo.profile) 
                setUserName(location.state.userInfo.profile.last_name + " " + location.state.userInfo.profile.first_name) ;
            else setUserName(location.state.userInfo.email) ;
        }
    })
    
    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} className={classes.username}>
                    { username }
                </Grid>
                <Grid item xs={6}>
                    <UpdateUserForm />
                </Grid>
                <Grid item xs={6}>
                    <UpdateProfileForm />
                </Grid>
            </Grid>
        </Box>
    )
}
export default UpdateUser ;