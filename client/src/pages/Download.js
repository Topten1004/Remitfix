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
    Button,
    Grid,
    Typography,
    Divider,
    Stack
} from '@mui/material';
// components
import Page from '../components/Page';
import { connect } from 'react-redux';
//
import PropType from 'prop-types';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import DLogo from '../components/DLogo';

import DownloadMain from '../components/download/DownloadMain';
// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
    btnDownload: {
        color: '#00cc00',
        backgroundColor: '#F3FCF0',
        border: '1px solid',
        marginTop: '20px',
    },
    columnGrid: {
        spacing: '0',
        direction: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: '#1B262C'
    },
    rowGrid: {
        container: '0',
        direction: "row",
        alignItems: "left",
        justifyContent: "space-between",
        textAlign: "center"
    }
}))

const Download = (props) => {

    const classes = useStyles();

    return (
        < Page title="Download Document |RemitFix" >
            <Stack alignItems = 'center' justifyContent = 'center'>
                <DLogo sx = {{ margintLeft:'150px'}}/>
            </Stack>
            <Grid className={classes.columnGrid} alignItems='center' justifyContent='center'>
                <Grid item xs={12}>
                    <CheckCircleOutlineIcon sx={{ width: '130px', height: '130px', color: '#00cc00' }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: '700', fontSize: '30px' }}>Thank you for using RemitFix!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '15px' }}>Your transfer is on its way and we will update you via SMS and email on the</Typography>
                    <Typography sx={{ fontSize: '15px' }}>progress of your transfer.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.btnDownload}>Download receipt</Button>
                </Grid>
            </Grid>
            <Grid className={classes.columnGrid} >
                <Grid item xs={12} >
                    <DownloadMain />
                </Grid>
            </Grid>
        </Page >
    );
}

export default Download;