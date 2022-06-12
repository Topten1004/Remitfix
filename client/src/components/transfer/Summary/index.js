import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import StepBar from '../StepBar/index';

// material
import {
    Box,
    Container,
    Typography,
    Stack,
    Divider,
    Button
} from '@mui/material';
// components
import { connect } from 'react-redux';
//
import PropType from 'prop-types';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
        width: '100%',
        height: '40px'
    },
    title: {
        color: '#000000',
        fontSize: '17px',
        fontFamily: 'Robot',
        fontWeight: '700',
        textAlign: 'left',
        paddingTop: '20px',
        paddingLeft: '0px'
    },
    smallTitle: {
        fontSize: '15px',
        paddingTop: '30px',
        paddingLeft: '15px'
    },
    btnView: {
        backgroundColor: '#183765',
        color: '#ffffff',
        flex: '1',
        marginTop: '45px',
        fontSize: '17px',
        alignSelf: 'center',
        marginLeft: '5px',
        border: '1px solid grey',
        height: '120px',
        width: '80%',
        marginBottom : '50px',
        '&:hover': {
            backgroundColor: '#00CC00',
            color: '#ffffff',
            border: '1px solid white'
        },
    },
    stackStyle: {
        direction: "row",
        justifyContent: "space-between",
        fontSize: '15px'
    },
    content : {
        fontSize: '15px',
        fontFamily : 'Robot',
        color : '#000000'
    },
    strong : {
        fontSize: '15px',
        fontFamily : 'Robot',
        color : '#000000',
        fontWeight : '700'
    }
}));

export default function Summary() {
    const classes = useStyles();
    return (
        <Container sx={{ display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF", border : '1px solid', color:'#EAEAEA'}} >
            <Box className={classes.box}>
                <Typography className={classes.title}>Summary</Typography>
            </Box>
            <Divider fullWidth sx ={{ width : '100%'}}/>
            <Stack flexDirection={'column'} justifyContent={'center'} spacing = {2.5} sx = {{ marginTop : '40px'}}>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={"div"} className={classes.content} >
                        Transaction No.
                    </Box>
                    <Box component={"div"} className={classes.content} >
                        094829023
                    </Box>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={"div"} className={classes.content} >
                        Payment method
                    </Box>
                    <Box component={"div"} className={classes.content} >
                        Visa*9231
                    </Box>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={"div"} className={classes.content} >
                        Amount sent
                    </Box>
                    <Box component={"div"} className={classes.content} >
                        2,000 NOK
                    </Box>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={"div"} className={classes.content} >
                        Transfer fee
                    </Box>
                    <Box component={"div"} className={classes.content} >
                        0 NOK
                    </Box>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={"div"} className={classes.strong} >
                        Total amount paid
                    </Box>
                    <Box component={"div"} className={classes.strong} >
                        2,000 NOK
                    </Box>
                </Stack>
                <Stack justifyContent={'space-between'} flexDirection={'row'}>
                    <Box component={"div"} className={classes.strong} >
                        Recipient gets
                    </Box>
                    <Box component={"div"} className={classes.strong} >
                        219.46 USD
                    </Box>
                </Stack>
            </Stack>
            <Divider fullWidth sx = {{ marginTop : '20px'}}/>
            <Button className={classes.btnView}>View receipt</Button>
        </Container>
    );
}
