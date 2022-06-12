import { Link as RouterLink, Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Button, Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';

// components
import DLogo from '../components/DLogo';
import logoImg from '../assets/dark_logo.png';
import DropDown from '../components/home/dropdown'

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  backgroundColor: '#FFFFFF',
  lineHeight: 0,
  width: '100%',
  height: '80px',
  position: 'absolute',
  marginTop: '17px',
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(0, 18, 0)
  }
}));

const useStyles = makeStyles({
  btnRegister: {
    color: '#FFFFFF',
    background: '#C72127',
    borderRadius: '5px',
    fontSize: '20px',
    fontWeight: '700',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '12px',
    paddingBottom: '12px',
    width: '116px !important',
    height: '47px !important',
    "&:hover": {
      color: '#000000'
    }
  },
  login: {
    fontSize: '16px',
    marginRight: '35px',
    color: '#1B262C'
  },
  track: {
    color: '#1B262C',
    fontSize: '16px',
    marginRight: '32px'
  },
  home: {
    fontSize: '16px',
    fontWeight: '700px'
  }
})
// ----------------------------------------------------------------------

export default function HomeLayout() {

  const classes = useStyles();

  const navigate = useNavigate();

  const onRegister = () => {
    navigate("/register");
  }

  const onLogin = () => {
      navigate("/login");
  }

  const onTrackTransfer = () => {

  }

  return (
    <>
      <HeaderStyle>
        <Stack justifyContent='space-between' direction='row' sx={{ display: 'flex', alignItems: 'center' }}>
          <Box component="img" src={logoImg} sx={{ width: 160, height: 40, zIndex: 2 }} />
          <Box sx={{ display: 'flex' }}>
            <Button sx={{ color: '#1B3764', fontSize: '16px', fontWeight: '700' }}>Home</Button>
            <DropDown />
            <Button className={classes.track}>Track a Transfer</Button>
            <Button className={classes.login} onClick = {onLogin}>Log in</Button>
            <Button className={classes.btnRegister} onClick = {onRegister}>Register</Button>
          </Box>
        </Stack>
      </HeaderStyle>
      <Outlet />
    </>
  );
}
