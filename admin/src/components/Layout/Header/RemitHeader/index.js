import React, { useEffect, useState, useRef } from 'react' ;

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { SignOut } from '../../../../redux/actions/remit/auth';

import AvatarImg from '../../../../assets/avatars/avatar_1.jpg' ;

import Setting from './Setting';

import {
    Box, 
    List, 
    ListItem,
    Grid,
    Avatar
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        display : "flex" ,
        alignItems : 'flex-end',
        
        height : theme.layout.headerHeight , 
        backgroundColor : 'white',

        "& a" : {
            textDecoration : "none",
            minWidth : "90px !important" ,
            color : 'gray',

            textAlign : 'center'
        },
        "& .MuiList-root" : {
            display : "flex" ,
            padding : "0px"
        },
        "& .MuiListItem-root" : {
            width : "auto !important" ,
            
            fontSize : "15px" ,
            cursor : "pointer" 
        } ,
    },
    active : {
        borderBottom : '3px solid #4115dd' ,
        fontWeight : 600,
        color : "#4115dd !important"
    },
    logout : {
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center',

        paddingRight : '20px'
    }
}))

const RemitHeader = (props) => {
    const classes = useStyles() ;

    const {
        SignOut
    } = props ;

    const [ navIndex, setNavIndex ] = useState(0);
    const [ isOpenSetting , setIsOpenSetting ] = useState(false) ;
    const anchorRef = useRef(null) ; 

    const navItems = [
        {
            nav : 'User',
            link : '/Remit/user'
        },
        {
            nav : 'Crypto',
            link : '/Remit/crypto'
        },
        {
            nav : 'Wallet' ,
            link : '/Remit/wallet'
        },
        {
            nav : 'Account' ,
            link : '/Remit/account'
        },
        {
            nav : 'Notification' ,
            link : '/Remit/notification'
        }
    ]

    const handlePopOver = () => {
        setIsOpenSetting(!isOpenSetting) ;
    }

    const handleNavIndex = (index) => {
        setNavIndex(index);
    }
    
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={8}>
                    <List>
                        {
                            navItems.map((item, index) => {
                                return(
                                    <ListItem key={index} >
                                        <Link to={item.link} className={ index === navIndex ? classes.active : '' } onClick={() => handleNavIndex(index)}>
                                            {item.nav}
                                        </Link>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Grid>
                <Grid item xs={4} className={classes.logout} sx={{cursor : 'pointer'}}>
                    <Avatar alt="Avatar" src={AvatarImg} ref={anchorRef} onClick={(e) => handlePopOver(e)} />
                </Grid>
            </Grid>
            <Setting
                open={isOpenSetting}
                handlePopOver={handlePopOver}
                anchorEl={anchorRef.current}
                SignOut={SignOut}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    isAuthenticated : state.remit.auth.isAuthenticated
})
const mapDispatchToProps = {
    SignOut
}
export default connect(mapStateToProps, mapDispatchToProps)(RemitHeader) ;