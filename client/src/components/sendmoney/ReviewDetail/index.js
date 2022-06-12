import React from 'react';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import {
    Box,
    Stack,
    Button,
    Typography,
    Checkbox,
    Card,
    Divider,
    TextField,
    FormControlLabel,
    FormControl,
    Container
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: '10px',
        border: "1px solid",
        borderColor: '#F3F5F7',
        display: "flex",
        flexDirection: "column"
    },
    btnContinue: {
        backgroundColor: '#183765',
        color: '#ffffff',
        flex: '1',
        marginTop: '15px',
        fontSize: '17px',
        alignSelf: 'center',
        marginLeft: '5px',
        border: '1px solid grey',
        height: '120px',
        width: '80%',
        '&:hover': {
            backgroundColor: '#00CC00',
            color: '#ffffff',
            border: '1px solid white'
        },
    },
    title: {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: 700,
    },
    content: {
        fontWeight: 600,
        fontSize: '13px',
    },
    btnEdit: {
        color: '#00CC00',
        flex: '1',
        fontSize: '17px',
        outlineColor: '#00CC00'
    },
    containerStyle: {
        border: '1px solid',
        borderColor: '#D5D5D5',
        marginTop : '20px',
        marginLeft : '0px',
        marginRight : '0px',
        borderRadius : '5px',
    },
    InputField: {
        marginLeft : 'auto',
        marginRight : 'auto',
        paddingBottom : '0',
        '&:hover': {
            backgroundColor: '#D5D5D5',
            color: '#ffff00',
            border: '1px solid white'
        },
    }
}));

export default function ReviewDetail() {

    const classes = useStyles();
    const navigate = useNavigate();

    const onContinue = () => {
        navigate('/paytransfer', { replace: true });
    }

    return (
        <Container sx = {{ marginTop : '100px', marginRight : '0px', marginLeft : '0px'}}>
            <Typography className={classes.title}>Review details</Typography>
            <Container className= {classes.containerStyle}>
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center', marginTop : '20px' }}>
                        <Typography className={classes.content}>Transfer details</Typography>
                        <Link align="center" to="/dashboard" >
                            <Box className={classes.btnEdit}>
                                Edit
                            </Box>
                        </Link>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx = {{fontSize:'15px'}}>Transfer fee</Typography>
                        <Typography>First three are fee-free!</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Total amount to pay</Typography>
                        <Typography>2,000 NOK</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Real Exchange Rate</Typography>
                        <Typography>1 NOK - 0.109976 USD</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Recipient gets exactly</Typography>
                        <Typography>219.46 USD</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Transfer time</Typography>
                        <Typography>By July 24th</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={classes.content}>Recipient details</Typography>
                        <Link align="center" to="/dashboard" >
                            <Box className={classes.btnEdit}>
                                Edit
                            </Box>
                        </Link>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Name</Typography>
                        <Typography>Company Limited RemitFix</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Phone</Typography>
                        <Typography>97469080000</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Email</Typography>
                        <Typography>remitfix@gmail.com</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Country</Typography>
                        <Typography>Somalia</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography className={classes.content}>Delivery options</Typography>
                        <Link align="center" to="/dashboard" >
                            <Box className={classes.btnEdit}>
                                Edit
                            </Box>
                        </Link>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Method</Typography>
                        <Typography>Bank transfer</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>Partner</Typography>
                        <Typography>Premier Bank</Typography>
                    </Stack>
                    <TextField fullWidth className = {classes.InputField}>Enter a description or reference for this transfer (optional)</TextField>
                    <Button className={classes.btnContinue} onClick = {onContinue}>Continue</Button>
                </Stack>
            </Container>
        </Container>
    );
}
