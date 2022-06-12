
import React from 'react';

import { Link } from 'react-router-dom';

import { BaseOptionChartStyle } from '../../components/charts/BaseOptionChart';

import SemiCircleProgressBar from "react-progressbar-semicircle";

import {
    Box,
    Stack,
    Button,
    Checkbox,
    Card,
    Container,
    CardContent,
    CardHeader,
    Divider,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    CircularProgress
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    btnCurrent: {
        color: '#4115DD',
    },
    root: {
        marginLeft:'20px',
        border: "1px solid",
        borderColor: '#EAEAEA',
        display: "flex",
        flexDirection: "column",
        marginTop : '29px',
    },
    title: {
        fontSize: "17px important",
        fontWeight: "bold",
        marginBottom : '22px',
        marginLeft : '20px',
        marginTop : '24px'
    },
    content: {
        paddingTop:'10px',
        paddingLeft:'15px',
        fontSize: "14px",
        paddingBottom:'10px',
    },
    textPrice : {
        color:'#F52C71', 
        textAlign:'center', 
        pt:'15px', 
        fontWeight:'700',
        fontSize : '24px',
        marginTop : '20px'
    },
    textKey : {
        fontSize:'15px',
        paddingLeft: '20px', 
    },
    textValue : {
        fontSize :'17px',
        fontWeight : '700',
        paddingRight : '20px'
    },
}));

const SendingStatus = () => {

    const classes = useStyles();

    return (
        <Box component={"div"} className={classes.root}>
            <Stack>
                <Box className={classes.title}>Sending Status</Box>
                <Divider />
                <Box className={classes.textPrice}>220 USD remaining to transfer</Box>
            </Stack>
            <Stack flexDirection={'column'} textAlign={'center'} sx ={{marginTop:'30px'}}>
                <SemiCircleProgressBar percentage={33} stroke = "#F52C71" strokeWidth = "50" diameter = '400'/>
            </Stack>
            <Stack flexDirection={'column'} justifyContent={'center'} spacing = {2}>
                <Stack justifyContent={'space-between'} flexDirection={'row'} sx = {{spacing : '33px'}}>
                    <Box component={"div"} className={classes.textKey} >
                        Amount transferred this month
                    </Box>
                    <Box component={"div"} className={classes.textValue} >
                        2,780 USD
                    </Box>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={"div"} className={classes.textKey}>
                        Next limit reset date
                    </Box>
                    <Box component={"div"} className={classes.textValue}>
                        30 Sep, 2020
                    </Box>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={'div'} className={classes.textKey}>
                        Remaining days til next reset
                    </Box>
                    <Box component={'div'} className={classes.textValue} sx = {{fontWeight:'700'}}>
                        22
                    </Box>
                </Stack>
            </Stack>
        </Box >
    )
}

export default SendingStatus;