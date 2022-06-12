import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Stack, Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm, CountrySelect } from '../components/authentication/register';
import AuthSocial from '../components/authentication/AuthSocial';
import { LoginForm } from 'src/components/authentication/login';
// ----------------------------------------------------------------------

import { GREEN } from 'src/static/constant';
const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundColor: '#D5D5D5'
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
  marginTop : '100px',
  padding: theme.spacing(0, 0, 0, 0)
}));
// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Register |RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
            <Stack sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: "30px", marginTop : '100px'}} align="center" >
                Create an new account!
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontsize: 15 }} align="center" >
                Already have an account?
                <Link variant="subtitle2" align="center" component={RouterLink} sx={{ fontsize: 15, color: GREEN }} to="/login">
                  Login now
                </Link>
              </Typography>
            </Stack>

            <RegisterForm />

            <AuthSocial />

            <Typography variant="p" sx={{ mt: 2 , fontSize:'13px', textAlign:'center'}}>
              By continueing you agree to our <b>Terms and conditions</b> as well as our <b>Privacy Policy  </b>
            </Typography>

        </Container>
      </ContainerStyle>
    </RootStyle >
  );
}
