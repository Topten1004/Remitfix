import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Box,
  Grid,
  Checkbox,
  Container,
  Typography,
} from '@mui/material';
// components
import Page from '../components/Page'
import { connect } from 'react-redux';
//
import PropType from 'prop-types';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
import { makeStyles } from '@mui/styles';

import Info from '../components/customer/details/info/index';

import Activity from '../components/customer/details/activity/index';

const useStyles = makeStyles(() => ({
  btnCancel: {
    variant: 'outlined',
    color: '#F52C71',
    marginTop: '20px',
    paddingLeft: '20px'
  },
  title: {
    fontSize: '15px',
    paddingLeft: '60px'
  },
  btnSend: {
    backgroundColor: '#183765',
    color: '#ffffff',
    fontSize: '17px',
    border: '1px solid grey',
    height: '42px',
    fontWeight : '100 ! important',
    marginRight : '80px',
    width : '202px',
    '&:hover': {
        backgroundColor: '#00CC00',
        color: '#ffffff',
        border: '1px solid white'
    },
  },
  linkEdit: {
    marginRight : '12px',
    marginTop : '5px'
  }
  
}));


const CustomerDetails = (props) => {
  const classes = useStyles();

  return (
    <>
      <Page title="Customer Details |RemitFix">
        <Container sx={{ backgroundColor: '#F3F5F7' }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="p" sx={{ fontSize: '15px' }}>All transfers</Typography>
            <Box display={'flex'}>
              <Link align="center" to="/dashboard" >
                    <Box className = {classes.linkEdit}> 
                        Edit 
                    </Box>
                </Link>
              <Button className = {classes.btnSend}>Send money</Button>
            </Box>
          </Stack>
        </Container>
      </Page>
      <Grid container>
        <Grid item xs={7}>
          <Info />
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
    </>

  );
}

CustomerDetails.propsType = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);