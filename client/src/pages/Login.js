import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------
import {GREEN} from '../static/constant';

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
  justifyContent: 'center',
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
            <Stack sx={{ mb: 2}}>
              <Typography sx={{ fontSize: "30px", marginTop : '100px'}} align="center" >
                Welcome back!
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontsize: 15 }} align="center" >
                New to RemitFix?
                <Link variant="subtitle2" align="center" component={RouterLink} sx={{ fontsize: 15 , color : GREEN}} to="/register">
                  Sign up now
                </Link>
              </Typography>
            </Stack>
            <LoginForm />
            <AuthSocial />
        </Container>
      </ContainerStyle>
    </RootStyle>
  );
}
