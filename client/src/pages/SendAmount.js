import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, TextField, FormControl, InputLabel, NativeSelect, Button, InputAdornment } from '@mui/material';
// layouts
import Page from '../components/Page';
// ----------------------------------------------------------------------
import { useNavigate } from 'react-router-dom';
import { CountrySelect } from '../components/authentication/register';
import { createTheme, ThemeProvider } from '@mui/material';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  title : {
    fontSize: "30px", 
    fontWeight: '700', 
    marginTop: '100px'
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
})

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    width: '100%',
    height: '100%',
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

// ----------------------------------------------------------------------

export default function SendAmount() {

  const classes = useStyles();
  const navigate = useNavigate();

  const onSendNow = () => {
    navigate('/select_recipient', { replace: true });
  }

  return (
    <RootStyle title="Send Money |RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
          <Typography className={classes.title} align="center" >
            Choose country and enter<br /> an amount to send
          </Typography>
          <CountrySelect fullWidth/>
          <Stack direction="row" sx={{ mt: '20px' }}>
            <TextField sx={{ width: '80%' }} autoComplete="amount" />
            <FormControl sx={{ width: '20%' }}>
              <InputLabel htmlFor="uncontrolled-native">
                Currency
              </InputLabel>
              <NativeSelect>
                <option>USD</option>
                <option>NOK</option>
                <option>EURO</option>
              </NativeSelect>
            </FormControl>
          </Stack>
          <Stack direction="column" justifyContent='left' sx={{ mt: '20px' }}>
            <Typography>Fee: 60NOK</Typography>
            <Typography>Total amount: 2000NOK</Typography>
            <Typography>Real exhange rate: 1 NOK - 0.109976 USD</Typography>
          </Stack>
          <Stack direction="row" sx={{ mt: '20px' }}>
            <TextField sx={{ width: '80%' }} autoComplete="amount" />
            <FormControl sx={{ width: '20%' }}>
              <InputLabel htmlFor="uncontrolled-native">
                Currency
              </InputLabel>
              <NativeSelect>
                <option>USD</option>
                <option>NOK</option>
                <option>EURO</option>
              </NativeSelect>
            </FormControl>
          </Stack>
          <Stack direction="column">
            <Typography sx={{ mt: '20px' }}>You are saving 150 NOK in this transfer</Typography>
            <Button className={classes.btnSend} onClick={onSendNow} fullWidth >Send Now</Button>
          </Stack>
        </Container>
      </ContainerStyle>
    </RootStyle >
  );
}
