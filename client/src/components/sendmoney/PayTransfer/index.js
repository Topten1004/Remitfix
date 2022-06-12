import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Button, Container, Typography } from '@mui/material';
// components
import Page from "../../../components/Page";
import { makeStyles, useTheme } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  btnContinue: {
    backgroundColor: '#183765',
    color: '#fff',
    flex: '1',
    fontSize:'17px',
    width: '80%',
    alignSelf:'center',
    marginTop:'20px',
    marginBottom:'20px',
    '&:hover': {
      backgroundColor: '#818181',
      color: '#fff',
    },
  },
  button: {
    backgroundColor: '#183765',
    color: '#fff',
    flex: '1',
    fontSize:'17px',
    alignSelf:'center',
    color:'#000000',
    marginLeft:'5px',
    backgroundColor:'#FFFFFF',
    border:'1px solid grey',
    height:'120px',
    '&:hover': {
      backgroundColor: '#00CC00',
      color: '#fff',
      border:'1px solid white'
    },
  },
})

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
  padding: theme.spacing(3, 0,0,0)
}));

// ----------------------------------------------------------------------

export default function PayTransfer() {
  
  const classes = useStyles();
  const navigate = useNavigate();

  const onContinue = () => {
    navigate('/review/details', { replace: true });
  };
    return (
    <RootStyle title="Delivery Options | RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
            <Stack sx={{ mb: 2, marginTop : '100px' }}>
              <Typography sx={{ fontSize: "30px" }} align="center" >
                Delivery options
              </Typography>
              <Stack direction = "row">
                <Button className = {classes.button} >
                  <Stack direction = "column">
                    <Typography sx = {{fontWeight:'700'}}>Cash pickup</Typography>
                    <Typography>Within minutes</Typography>
                  </Stack>
                </Button>
                <Button className = {classes.button} >
                <Stack direction = "column">
                    <Typography sx = {{fontWeight:'700'}}>Bank transfer</Typography>
                    <Typography>24 hours or same day</Typography>
                  </Stack>
                </Button>
                <Button className = {classes.button} >
                <Stack direction = "column">
                    <Typography sx = {{fontWeight:'700'}}>Mobile money</Typography>
                    <Typography>Near instant</Typography>
                  </Stack>
                </Button>
              </Stack>
              <Typography sx = {{fontWeight:'700', marginTop:'30px'}}>Partners</Typography>
              <Button sx = {{width:'80%' }} className = {classes.btnContinue} onClick= {onContinue}>Continue</Button>
            </Stack>
        </Container>
      </ContainerStyle>
    </RootStyle>
  );
}
