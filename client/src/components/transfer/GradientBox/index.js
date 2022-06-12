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
} from '@mui/material';
// components
import { connect } from 'react-redux';
//
import PropType from 'prop-types';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const useStyles = makeStyles(() => ({
    box: {
        backgroundColor: '#5F42F0',
        color:'#FFFFFF',
        width : '100%',
        height : '145px'
    },
    title: {
        color : '#FFFFFF',
        fontSize : '30px',
        fontFamily : 'Robot',
        fontWeight : '700',
        paddingTop : '25px',
        paddingLeft : '25px'
    },
    box1 : {
        backgroundColor: '#FFFFFF',
        width: '100%',
        color : '#EAEAEA',
        border : '1px solid'
    },
    smallTitle : {
        fontSize : '15px',
        paddingTop : '30px',
        paddingLeft : '15px',
        color : '#000000'
    },
}));

export default function GradientBox() {
    const classes = useStyles();
    return (
        <Container>
            <Box className = {classes.box}>
                <Typography className = {classes.title}>You sent 2,000 NOK to Diego<br/>Fernando Valencia</Typography>
            </Box>
            <Box className = {classes.box1}>
                <Typography className = {classes.smallTitle}>Your transfer has been delivered and is on its way to your recipient’s bank <br />account.</Typography>
                <StepBar />
            </Box>
        </Container>
    );
  }
  