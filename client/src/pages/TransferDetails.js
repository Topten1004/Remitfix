import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
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
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
} from '@mui/material';
// components
import Page from '../components/Page'
import { connect } from 'react-redux';
//
import PropType from 'prop-types';
// ----------------------------------------------------------------------
import GradientBox from '../components/transfer/GradientBox/index';
import Summary from '../components/transfer/Summary/index';
// ----------------------------------------------------------------------
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  btnCancel: {
    variant: 'outlined',
    color: '#F52C71',
    marginTop: '20px',
    paddingLeft: '20px'
  }
}));


const TransferDetails = (props) => {
  const classes = useStyles();

  return (
    <>
      <Page title="Transfer Details |RemitFix">
        <Container sx={{ backgroundColor: '#F3F5F7' }}>
          <Stack direction="row" justifyContent="space-between" mb={2} >
            <Typography variant="p" sx={{ fontSize: '15px' }}>All transfers</Typography>
          </Stack>
        </Container>

      </Page>
      <Grid container>
        <Grid item xs={7}>
          <GradientBox />
          <Button className={classes.btnCancel}>Cancel transfer</Button>
        </Grid>
        <Grid item xs={4}>
          <Summary />
        </Grid>
      </Grid>
    </>

  );
}

TransferDetails.propsType = {
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TransferDetails);