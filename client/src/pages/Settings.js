import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { borders } from '@mui/system';
import DoughnutChart from '../components/DoughnutChart';
import CircularProgress from '@material-ui/core/CircularProgress';
import SendingStatus from 'src/components/Verification/SendingStatus';
// material
import {
    Card,
    Table,
    Stack,
    Avatar,
    Button,
    Box,
    Checkbox,
    Grid,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination,
    Divider
} from '@mui/material';
// components
import Page from '../components/Page';

import { connect } from 'react-redux';
//
import PropType from 'prop-types';

import { styled } from '@mui/material/styles';

import { makeStyles } from '@mui/styles';

import Setting from '../components/settings'

// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    title : {
        marginTop : '100px',
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
    }
}))

const Settings = (props) => {

    const classes = useStyles();

    return (< Page title="Settings |RemitFix" >
        <Container sx={{ backgroundColor: '#F3F5F7' }} >
            <Stack direction="row" alignItems="center" justifyContent="space-between"  >
                <Typography className= {classes.title} > Settings </Typography>
            </Stack >
            <Grid container >
                <Grid item xs={12}>
                    <Setting />
                </Grid>
            </Grid > 
        </Container> 
    </Page >
    );
}

export default Settings;