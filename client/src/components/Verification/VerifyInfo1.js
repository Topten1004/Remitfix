import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import {
    Box,
    Stack,
    Button,
    Checkbox,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl
} from '@mui/material';

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
    btnUpgrade: {
        color:'#FFFFFF',
        background : '#183765',
        border: '1px solid color',
        fontSize:'15px',
        marginTop:'15px',
        marginBottom : '15px',
        marginRight : '20px',
        '&:hover':{
            background:'#AFAFAF'
        }
    },
    smallTitle : {
        fontSize : '17px',
        fontWeight : '700',
        marginTop:'24px',
        marginBottom : '22px',
        marginLeft: '20px'
    },
    root: {
        marginLeft:'10px',
        border: "1px solid",
        borderColor: '#EAEAEA',
        display: "flex",
        flexDirection: "column"
    },
    title: {
        paddingTop: '15px',
        paddingLeft: '15px',
        fontSize: "15px",
        fontWeight: "bold"
    },
    content: {
        paddingTop: '15px',
        paddingLeft: '15px',
        fontSize: "14px",
        paddingBottom: '10px',
        paddingRight : '20px'
    }
}));

const VerifyInfo1 = () => {

    const classes = useStyles();

    const navigate = useNavigate();

    const onUpgradeNow = () => {
        navigate("/tier");
    }

    return (
    <Box component={"div"} className={classes.root} >
        <Stack justifyContent='space-between' flexDirection={'row'} >
            <Box component={"div"} className = {classes.smallTitle}>Tier2 </Box>
            <Button onClick = { onUpgradeNow } className={classes.btnUpgrade} >Upgrade now</Button> 
        </Stack>
        <Divider />
        <Stack flexDirection={'column'} justifyContent={'center'} >
            <Stack flexDirection={'row'} sx={{ p: '150' }} >
                <Box component={"div"} className={classes.title} > 
                    Transfer amount in this level:
                </Box> 
                <Box component={"div"} className = {classes.title} sx={{ color: '#4115DD'}} >
                    30,000 USD 
                </Box> 
            </Stack> 
            <Stack justifyContent={'space-between'} flexDirection={'row'} >
                <Box component={'div'} className={classes.content} >
                    Proof of identify 
                </Box>
                <Link align="center" to="/dashboard" >
                    <Box className = {classes.content}> 
                        Upload document 
                    </Box>
                </Link>
            </Stack>
            <Stack justifyContent={'space-between'} flexDirection={'row'} >
                <Box component={'div'} className={classes.content} >
                    Proof of funds 
                </Box>
                <Link align="center" to="/dashboard" >
                    <Box className = {classes.content} > 
                        Upload document 
                    </Box>
                </Link>
            </Stack> <Stack justifyContent={'space-between'} flexDirection={'row'} >
                <Box component={'div'} className={classes.content} >
                    Proof of address 
                </Box> 
                <Link align="center" to="/dashboard" >
                    <Box className = {classes.content} > 
                        Fill in your gaps 
                    </Box> 
                </Link>
            </Stack> 
        </Stack> 
    </Box >
    )
}

export default VerifyInfo1;