import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Button, Container, Typography, Grid, TextField } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';

import { MHidden } from '../components/@material-extend';

// ----------------------------------------------------------------------
import { GREEN } from '../static/constant';

import { makeStyles } from '@mui/styles';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundColor: '#D5D5D5',
  }
}));

const ContainerStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  width: '53%',
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  maxWidth: 600,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  marginTop: '80px',
  padding: theme.spacing(3, 0, 0, 0)
}));

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '10px',
    border: "1px solid",
    color: '#EAEAEA',
    display: "flex",
    flexDirection: "column",
    border: '1px solid',
    marginTop: '10px',
    "& .MuiGrid-item": {
      fontSize: "15px",
      textAlign: "right",
      fontWeight: 100,
    },
    "& .MuiGrid-item:nth-child(odd)": {
      textAlign: "left",
    }
  },
  normal: {
    fontSize: "13 px",
    textAlign: 'center',
    marginTop : '28px'
  },
  columnGrid : {
    spacing : '0',
    direction : 'column',
    alignItems : 'center',
    textAlign : 'center'
  },
  login: {
    marginTop:'10px'
  },
  btnSend: {
    marginTop: '20px',
    backgroundColor: '#183765',
    color: '#fff',
    fontWeight: '500',
    fontSize: '17px',
    width: '80%',
    alignSelf: 'center',
    '&:hover': {
      backgroundColor: '#818181',
      color: '#fff',
    },
  }
}));
// ----------------------------------------------------------------------

export default function Resetpass() {
  const classes = useStyles();
  return (
    <RootStyle title="Reset Password| RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <Grid container className= {classes.columnGrid}>
              <Grid item xs={12}>
                <CheckCircleOutlineIcon sx={{ width: '130px', height: '130px', color: '#00cc00' }} />
              </Grid>
            </Grid>
            <Stack sx={{ mt: 0 }}>
              <Typography sx={{ fontSize: "30px" }} align="center" >
                Password reset email sent
              </Typography>
            </Stack>
            <Stack sx = {{mt:'5px'}}>
              <Typography className={classes.normal}>We have sent you a reset password link to your registered email address. If you don’t see the email, check your spam folder.</Typography>
            </Stack>
            <Stack textAlign='center'>
              <Button className={classes.btnSend} fullWidth >Log in</Button>
              <Typography className = {classes.login}>
                Didn't receive our email?<Link align='center' variant="subtitle2" component={RouterLink} sx={{ fontsize: 15, color: GREEN }} to="/dashboard">
                Resend
              </Link>
              </Typography>
            </Stack>
          </ContentStyle>
        </Container>
      </ContainerStyle>
    </RootStyle>
  );
}
