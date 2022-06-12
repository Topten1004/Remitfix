import React from 'react' ;

import { Link, useNavigate } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';

import {
   Popover,
   List,
   ListItem,
   Divider,
   Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    popover : {
        zIndex : "1500 !important",
        "& .MuiList-root" : {
            padding : "0px"
        },
        "& .MuiListItem-root" : {
            fontSize : "14px" ,
            color : theme.palette.primary.main
        },
        "& a" : {
            textDecoration : "none"
        }
    }
}))

const Setting = (props) => {

    const classes = useStyles() ;

    const navigate = useNavigate() ;

    const {
        open , anchorEl , handlePopOver ,
        SignOut
    } = props ;

    const handleLogOut = () => {
        SignOut(navigate) ;
    }

    return (
        <Popover
            id="setting-popover"
            anchorEl={anchorEl}
            open={open}
            onClose={handlePopOver}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            classes={{
                paper : classes.popover
            }}
        >
            <List>
                <ListItem button onClick={handlePopOver} >
                    <LogoutIcon /> 
                    <Box component={'span'} sx={{pl : 2}} onClick={() => handleLogOut()}>
                        Logout
                    </Box>
                </ListItem>
                <Divider />
            </List>
        </Popover>
    )
}

export default Setting ;