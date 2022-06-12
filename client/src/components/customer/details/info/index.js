import React from "react";
import { makeStyles } from '@mui/styles';

import {Box, Stack, Button, Typography, Container, Grid, Divider} from '@mui/material'

import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor : '#FFFFFF'
    },
    title : {
        fontWeight : '700',
        fontSize : '30px',
        fontFamily : 'Robot',
        marginLeft  : '40px',
        paddingTop : '20px'
    },
    country : {
        marginLeft : '40px',
    },
    smalltitle : {
        fontSize : '17px',
        fontWeight : '700'
    },
    content : {
        fontSize : '15px'
    }
}))

export default function Info({sx}) {
    
    const classes = useStyles();
    return (
        <Stack justifyContent= "left">
            <Box className = {classes.root}>
                <Stack>
                    <Box className = {classes.title}>Diego Valencia Palacios</Box>
                    <Box className = {classes.country}>CountryName</Box>
                </Stack>
                <Divider sx = {{ marginTop : '20px'}}/>
                <Stack direction = "row" spacing={16} sx = {{marginLeft:'40px', marginTop:'30px'}}>
                    <Stack direction = "column" spacing={1}>
                        <Box className = {classes.smalltitle}>Country</Box>
                        <Box className = {classes.content}>Somalia</Box>
                    </Stack>
                    <Stack direction = "column" justifyContent = "flex-start" spacing={1}>
                        <Box className = {classes.smalltitle}>City</Box>
                        <Box className = {classes.content}>Mogadiscio</Box>
                    </Stack>
                </Stack>
                <Stack direction = "row" spacing={10} sx = {{marginLeft:'40px', marginTop:'30px'}}>
                    <Stack direction = "column" justifyContent = "flex-start" spacing={1}>
                        <Box className = {classes.smalltitle}>Street address</Box>
                        <Box className = {classes.content}>Calle 1 52A</Box>
                    </Stack>
                    <Stack direction = "column" justifyContent = "flex-start" spacing={1}>
                        <Box className = {classes.smalltitle}>Postal code</Box>
                        <Box className = {classes.content}>110131</Box>
                    </Stack>
                </Stack>
            </Box>
            <Button variant="outlined" sx = {{color : "#F52C71", marginLeft: '20px'}}>Remove recipient</Button>
        </Stack>
    )
}