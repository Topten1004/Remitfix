

import React from 'react' ;

import { Link } from 'react-router-dom';

import LogoImg from '../../../assets/logo.png' ;

import {
    Box,
    Divider,
    List, 
    ListItem
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        display : "flex" ,
        justifyContent : 'center',

        backgroundColor : theme.palette.primary.main,

        height : 'calc(100vh - 55px)',

        "& .MuiList-root" : {
            width : '100%',
            padding : '0px'
        },
        "& .MuiListItem-root" : {
            padding : '10px',
            paddingLeft : '30px',
            color : 'white',
        },
        "& a" : {
            textDecoration : 'none',
            color : 'white'
        }
    },
    logo : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',

        color : 'white',

        backgroundColor : theme.palette.primary.main,
        height : '55px',
    }
}))

const SideBar = () => {
    const classes = useStyles() ;

    const menuItems = [
        {
            title : 'CA1 HEX',
            link : '/hex'
        },
        {
            title : 'CA1 DEX',
            link : '/dex'
        },
        {
            title : 'CA1 Swap',
            link : '/swap'
        },
        {
            title : 'Remit Fix',
            link : '/remit'
        }
    ]
    return (
        <>
            <Box className={classes.logo}>
                Logo Img
            </Box>
            <Box className={classes.root}>
                <List>
                    <Divider />
                    {
                        menuItems.map((item, index) => {
                            return (
                                <Box key={index}>
                                    <Link to={item.link}>
                                        <ListItem button>
                                            { item.title }
                                        </ListItem>
                                    </Link>
                                    <Divider />
                                </Box>
                                
                            )
                        })
                    }
                </List>
            </Box>
        </>
    )
}

export default SideBar ;