import PropTypes from 'prop-types';
// material
import { Box, Stack, Button, Divider, Typography, Container, Grid } from '@mui/material';
// ----------------------------------------------------------------------
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    color: '#1B262C',
    margin: 'auto',
    width: '53%',
    display: "flex",
    flexDirection: "column",
    marginTop: '10px',
    borderRadius: 1,
    "& .MuiGrid-item": {
      fontSize: "15px",
      textAlign: "right",
      fontWeight: 100,
    },
    "& .MuiGrid-item:nth-child(odd)": {
      textAlign: "left",
    }
  },
  content: {
    fontSize: "13px",
    fontWeight: '700',
    textAlign: 'left'
  },
  regular: {
    fontSize: "15px",
    fontWeight: '100',
    textAlign: 'left'
  },
  btnTransfer: {
    backgroundColor: '#183765',
    color: '#fff',
    flex: '1',
    fontSize: '17px',
    width: '80%',
    alignSelf: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    '&:hover': {
      backgroundColor: '#818181',
      color: '#fff',
    },
  },
  btnCancel: {
    backgroundColor: '#F3F5F7',
    color: '#F52C71',
    flex: '1',
    fontSize: '17px',
    width: '80%',
    alignSelf: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    '&:hover': {
      backgroundColor: '#818181',
      color: '#fff',
    },
  }
}));

export default function DownloadMain({ sx }) {

  const classes = useStyles();
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/dashboard", {replace: true});
  }

  const onMakeTransfer = () => {
    navigate("/dashboard", {replace: true});
  }

  return (
    <Container className={classes.root}>
      <Stack sx = {{ border : '1px solid #D5D5D5', paddingLeft: '16px', paddingRight : '16px'}}>
        <Grid container sx={{ marginTop: '10px' }} spacing={1}>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '13px', fontWeight: '700', textAlign: 'left' }}>Sender details</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.content}>Recipient details</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Sender Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ textAlign: 'left' }}>Recipient Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Sender Address</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ textAlign: 'left' }}>Recipient Address</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Divider />
          <Grid item xs={12} sx={{ marginTop: '8px' }}>
            <Typography sx={{ fontSize: '13px', fontWeight: '700', textAlign: 'left' }}>Transfer details</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Sent</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>07/07/20 - 3:00PM</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Transaction No.</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>0948290923</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Delivery</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>Cash Pickup</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Parnter</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>Permier Bank</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Currency</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>USD</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Transfer time</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>Within minutes</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Payment method</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>Visa*9231</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Amount sent</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>2,000 NOK</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Transfer fee</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '100' }}>0 NOK</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Transfer amount paid</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '700' }}>2,000 NOK</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Recipient gets</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '700' }}>219.46 USD</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography >Real Exchange Rate</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontSize: '15px', textAlign: 'right', fontWeight: '700' }}>1 NOK = 0.109976 USD</Typography>
          </Grid>
          <Divider />
        </Grid>
      </Stack>
      <Divider />
      <Typography sx={{ fontSize: '13px', color: '#818181' }}>RemitFix will never charge you a hidden fees and your recipient gets exactly the amount specified above. No surprise at all.</Typography>
      <Container sx={{ textAlign: 'center', marginTop: '10px' }}>
        <Box component={'span'}>You might review&nbsp;</Box>
        <Box component={'span'} sx={{ color: '#00CC00' }}>all your transfers&nbsp;</Box>
        <Box component={'span'} >or</Box>
      </Container>
      <Button onClick = {onMakeTransfer} className={classes.btnTransfer}>Make a new transfer</Button>
      <Divider />
      <Container sx={{ textAlign: 'center', marginTop: '10px' }}>
        <Box component={'span'} sx={{ alignItems: 'center' }}>Please review our &nbsp;</Box>
        <Box component={'span'} sx={{ color: '#00cc00' }}>refund policy&nbsp;</Box>
        <Box component={'span'}>if you wish to</Box>
      </Container>
      <Button onClick = {onCancel} className={classes.btnCancel}>Cancel your transfer</Button>
    </Container>
  );
}
