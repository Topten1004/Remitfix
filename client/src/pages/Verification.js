import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { borders } from '@mui/system';
import DoughnutChart from '../components/DoughnutChart';
import CircularProgress from '@material-ui/core/CircularProgress';
import SendingStatus from 'src/components/Verification/SendingStatus';
// material
import {
    Stack,
    Button,
    Grid,
    Container,
    Typography,
} from '@mui/material';
// components
import Page from '../components/Page';
import { connect } from 'react-redux';
//
import PropType from 'prop-types';

import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import VerifyInfo from 'src/components/Verification/VerifyInfo';
import VerifyInfo1 from 'src/components/Verification/VerifyInfo1';

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    mainContent : {
        backgroundColor: '#F3F5F7',
        marginRight : '140px',
        marginLeft : '45px', 
    },
    title : {
        marginTop : '28px',
        fontSize : '30px',
        fontWeight: '700'
    },
    Box1: {
        display: 'flex',
        width: '45%',
        backgroundColor: '#FFFFFF',
        height: '240px',
        border: 5,
        borderColor: '#FF00FF',
        justifyContent: 'space-between'
    },
    Box2: {
        width: '45%',
        backgroundColor: '#FFFFFF',
        height: '270px',
        border: 5,
        borderColor: '#FF00FF',
        marginTop: '20px'
    },
    btnUpgrade : {
        width: '190px', 
        height: '40px', 
        backgroundColor: '#183765', 
        mt: '15px'
    }
}))

const Verification = (props) => {

    const classes = useStyles();

    const navigate = useNavigate();
    const onUpgrade =()=>{
        navigate("/upgrade");
    }

    return (
    < Page title="Verification |RemitFix" >
        <Stack className = {classes.mainContent} >
            <Stack direction="row" alignItems="center" justifyContent="space-between"  >
                <Typography className= {classes.title} > Verification </Typography>
                <Button variant="contained" className = {classes.btnUpgrade} onClick = {onUpgrade}> Upgrade now </Button>
            </Stack >
            <Grid container >
                <Grid item xs={6}>
                    <Grid container spacing = '20px' >
                        <Grid item xs={12} >
                            <VerifyInfo />
                        </Grid> <Grid item xs={12} > 
                            <VerifyInfo1 />
                        </Grid>
                    </Grid >
                </Grid>
                <Grid item xs={6}>
                    <SendingStatus />
                </Grid>
            </Grid > 
        </Stack> 
    </Page >
    );
}

export default Verification;