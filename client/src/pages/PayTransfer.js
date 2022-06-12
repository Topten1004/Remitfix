import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Stack, Grid,   Container, Typography, TextField, FormControl, InputLabel, NativeSelect, Button, InputAdornment } from '@mui/material';
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
  },
  btnType : {
    color : '#000000',
    width : '168px', 
    marginTop :'30px', 
    height : '107px', 
    background : '#FFFFFF', 
    border : '1px solid #D5D5D5', 
    borderRadius : 1,
    "&:hover":{
        background: "#00CC00",
        color : '#ffffff'
    }
  }
})

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
  padding: theme.spacing(13,0, 0, 0)
}));
// ----------------------------------------------------------------------

export default function PayTransfer() {

  const classes = useStyles();
  const navigate = useNavigate();

  const onPay= () => {
      navigate('/download', { replace: true });
  }

  return (
    <RootStyle title="PayTransfer |RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
          <ContentStyle>
          <Typography className={classes.title} align="center" >
            Pay the transfer
          </Typography>
          <Grid container spacing={1}>
              <Grid item xs = {4}>
                  <Button className = {classes.btnType} sx = {{marginRight : '16px'}}>Debit/Credit Card<br/>You own card</Button>
              </Grid>
              <Grid item xs = {4}>
                  <Button className = {classes.btnType} sx = {{marginRight : '16px'}}>Debit/Credit Card<br/>You own card</Button>
              </Grid>
              <Grid item xs = {4}>
                  <Button className = {classes.btnType}>Debit/Credit Card<br/>You own card</Button>
              </Grid>
          </Grid>
          <Grid container>
              <Grid item xs = {12} lg = {12}>
                  <Typography sx = {{marginTop : '30px'}}>Name on card</Typography>
                  <TextField fullWidth size = "small"></TextField>
              </Grid>
              <Grid item xs = {12} lg = {12}>
                  <Typography sx = {{marginTop : '30px'}}>Card number</Typography>
                  <TextField fullWidth size = "small"></TextField>
              </Grid>
          </Grid>
          <Grid container spacing={2}>
              <Grid item xs = {6} lg = {6}>
                  <Typography sx = {{marginTop:'20px'}}>Expiration number</Typography>
                  <TextField fullWidth></TextField>
              </Grid>
              <Grid item xs = {6} lg = {6}>
                  <Typography sx = {{marginTop:'20px'}}>CVV</Typography>
                  <TextField fullWidth></TextField>
              </Grid>
          </Grid>
          <Grid container>
              <Grid item xs = {12} lg = {12}>
                <Stack spacing={2} sx = {{background: "#F3F5F7", border: '1px solid #D5D5D5', borderRadius : 1, marginTop:'30px', paddingLeft:'20px', paddingRight: '20px', marginBottom:'20px'}}>
                      <Stack justifyContent="space-between" direction = "row" spacing={2} sx = {{ marginTop : '20px'}}>
                          <Typography>You send</Typography>
                          <Typography>2, 000NOK</Typography>
                      </Stack>
                      <Stack justifyContent="space-between" direction = "row">
                          <Typography>They get exactly</Typography>
                          <Typography>219.46 USD</Typography>
                      </Stack>
                      <Stack justifyContent="space-between" direction = "row">
                          <Typography>Exchange rate</Typography>
                          <Typography>1 NOK = 0.109976 USD</Typography>
                      </Stack>
                      <Stack justifyContent="space-between" direction = "row">
                          <Typography>Our fee</Typography>
                          <Typography>+$0</Typography>
                      </Stack>
                      <Stack justifyContent="space-between" direction = "row">
                          <Typography sx = {{fontWeight : '700'}}>Total to pay</Typography>
                          <Typography sx = {{fontWeight : '700', marginBottom : '10px'}}>2,000 NOK</Typography>
                      </Stack>
                </Stack>
                <Stack justifyContent= "center">
                    <Button onClick = {onPay} fullWidth sx = {{width : '60%', background : '#183765', border: '1px solid #707070', color : 'white', alignSelf:'center'}}>Pay</Button>
                </Stack>
                <Stack justifyContent= "center">
                    <Typography sx = {{textAlign : 'center', fontSize:'13px', color:'#818181', marginBottom : '108px', marginTop :'10px'}}>All payments are encrypted by our SSL 256 bits-encryption</Typography>
                </Stack>    
              </Grid>
          </Grid>
          </ContentStyle>
        </Container>
      </ContainerStyle>
    </RootStyle >
  );
}
