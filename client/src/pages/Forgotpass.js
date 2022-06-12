import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Button, Grid,  Container, Typography, TextField } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';

import { MHidden } from '../components/@material-extend';

// ----------------------------------------------------------------------
import { GREEN } from '../static/constant';

import { makeStyles } from '@mui/styles';
import { textAlign } from '@mui/system';

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
    marginTop: '30px'
  },
  email: {
    marginTop:'28px'
  },
  login: {
    fontsize: 15, 
    color: GREEN, 
    marginTop :'10px',
    align:'center',
    textAlign : 'center'
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

export default function ForgotPassword() {
  const classes = useStyles();
  return (
    <RootStyle title="Reset password | RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <Stack sx={{ mt: 0 }}>
              <Typography sx={{ fontSize: "30px" , fontWeight:'700'}} align="center" >
                Forgot your password
              </Typography>
            </Stack>
            <Stack >
              <Typography className={classes.normal}>No problem. Just fill in your email and we’ll send you a link to reset you password.</Typography>
            </Stack>
            <Stack>
              <Typography className={classes.email}>Enter your email</Typography>
              <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address"
              />
            </Stack>
            <Stack>
              <Button className={classes.btnSend} fullWidth >Send Now</Button>
              <Link component={RouterLink} className= {classes.login} to="/resetpass">Log in with your account</Link>
            </Stack>
          </ContentStyle>
        </Container>
      </ContainerStyle>
    </RootStyle>
  );
}
