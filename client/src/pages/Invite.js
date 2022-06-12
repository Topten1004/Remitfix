import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
// material
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box, Button, Typography, Container, useMediaQuery, TextField , Stack} from '@mui/material';
// components
import Page from '../components/Page';
// ----------------------------------------------------------------------
import WLogo from '../components/WLogo';
import googleFill from '@iconify/icons-eva/google-fill';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    backgroundColor: '#F3F5F7',
    width: '100%',
    height: '100%'
  }
}));
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontSize: '30px !important',
    color: '#FFFFFF',
    fontWeight: '500',
    pt: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px !important',
    }
  },
  containerStyle: {
    position: 'absolute',
    maxWidth: 600,
    left : '30%',
    top : '90%',
    margin: 'auto',
    width: '40%',
    border: 1,
    backgroundColor: '#FFFFFF',
    height: '75/100',
    mt: '60px',
    borderRadius: '5px',
    maxWidth:'900px',
    pb:'20px',
    [theme.breakpoints.down('md')]:{
      height:'50%'
    }
  },
  backgroundStyle: {
    backgroundColor: '#5F42F0', 
    height: '48%', 
    width: '100%', 
    margin: "none",
    position : 'absolute'
  },
  inputStyle: {
    display: 'flex',
    mt: '20px'
  },
  btnCopy: {
    backgroundColor: '#5F42F0',
    margin: 'auto',
    '&:hover' :{
      backgroundColor : '#AFAFAF'
    }
  },
}))

// ----------------------------------------------------------------------

export default function Invite() {

  const classes = useStyles();
  const isXs = useMediaQuery("('min-width: 600px')");
  return (
    <RootStyle title="Invite |RemitFix">
      <Box className={classes.backgroundStyle}>
        <WLogo sx={{ pt: '30px', pl: '150px' }} />
        <Typography className={classes.title} >Refer friends to RemitFix and get a 200<br />NOK for every friend of yours who <br />sends at least 2,000 NOK</Typography>
        <Container className={classes.containerStyle}>
          <Typography sx={{ textAlign: 'center', pt: '20px' }}>Copy and share your personal invite link...</Typography>
          <Container className={classes.inputStyle}>
            <TextField id="standard-name" sx={{ width: '100%', mt:'10px' }} InputProps={{ endAdornment: <Button className = {classes.btnCopy}>Copy</Button> }} />
          </Container>
          <Stack direction="row" spacing={2} sx = {{ mt:'25px'}}>
            <Button variant="contained" fullWidth size="large" color="inherit" sx ={{ backgroundColor:'#63cd57'}}>
              <Icon icon={googleFill} color="#FFFFFF" />
            </Button>
            <Button variant="contained" fullWidth size="large" color="inherit" sx ={{ backgroundColor:'#3170f6'}}>
              <Icon icon={googleFill} color="#FFFFFF" />
            </Button>
            <Button variant="contained" fullWidth size="large" color="inherit" sx ={{ backgroundColor:'#68c2f9'}}>
              <Icon icon={googleFill} color="#FFFFFF" />
            </Button>
            <Button variant="contained" fullWidth size="large" color="inherit" sx ={{ backgroundColor:'#cccccc'}}>
              <Icon icon={googleFill} color="#FFFFFF" />
            </Button>
          </Stack>
        </Container>
      </Box>
    </RootStyle>
  );
}
