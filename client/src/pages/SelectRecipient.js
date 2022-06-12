import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Stack, Box, Card, Link, Container, Typography, TextField, FormControl, InputLabel, NativeSelect, Button, Checkbox, Radio, Divider } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { CountrySelect } from 'src/components/authentication/register';
// ----------------------------------------------------------------------
import PropTypes from 'prop-types';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import DeliveryOption from './DeliveryOption';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'table',
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

const ContentStyle = styled('div')(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  maxWidth: 600,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(15, 0, 0, 0)
}));

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  contents: {
    marginTop: '20px',
    fontSize: '17px'
  },
  radio: {
    outlineColor: '#818181',
    color: '#FFF000',
    '&:checked': {
      color: "#fff000"
    }
  },
  button: {
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
  btnSelect: {
    backgroundColor: '#00cc00',
    width: '80%',
    fontWeight: '500',
    fontSize: '17px',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginBottom:'15px',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#818181'
    },
  },
  btnOption : {
      width: '50%', 
      border : '1px solid #D5D5D5', 
      marginLeft : '0px !important', 
      marginTop : '10px', 
      borderRadius : '5px',
  }
})

// ----------------------------------------------------------------------

export default function SelectRecipient() {

  const classes = useStyles();
  const navigate = useNavigate();

  const onDelivery = () => {
    navigate('/delivery_options', { replace: true });
  }

  return (
    <RootStyle title="Select Recipient |RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
            <Stack sx={{ mb: 0, marginTop: '100px' }} direction="column">
              <Typography sx={{ fontSize: "24px", fontFamily: '', fontWeight: '700' }} align="center" >Add recipient details
              </Typography>
              <Typography sx={{ textAlign: 'center', fontSize: '10px', mt: '10px' }}>Already have a recipient?</Typography>
              <Button className={classes.btnSelect}>Select from your list</Button>
              <Typography variant="p" >Full name</Typography>
              <TextField fullWidth autoComplete="username" type="text" />
              <Typography variant="p" className={classes.contents} >Enter your email</Typography>
              <TextField fullWidth autoComplete="username" type="email" label="Email address" />
              <Typography variant="p" className={classes.contents} >Street Address</Typography>
              <TextField fullWidth autoComplete="username" type="text" />
              <Typography variant="p" className={classes.contents} >City/Town</Typography>
              <TextField fullWidth autoComplete="username" type="text" />
              <CountrySelect />
              <Typography variant="p" className={classes.contents} >Phone number</Typography>
              <TextField fullWidth autoComplete="username" type="text" />
              <RadioGroup name="use-radio-group" defaultValue="first">
                <Stack direction="row">
                  <MyFormControlLabel className = {classes.btnOption} value="first" label="Female" control={<Radio />} />
                  <MyFormControlLabel className = {classes.btnOption} fullWidth value="second" label="male" control={<Radio />} />
                </Stack>
              </RadioGroup>
              <Typography sx = {{ marginTop : '10px'}}>Bank details (optional)</Typography>
              <Divider />
              <Typography variant="p" className={classes.contents} >Account number</Typography>
              <TextField fullWidth type="number" />
              <Typography variant="p" className={classes.contents} >SWIFT code</Typography>
              <TextField fullWidth type="number" />
              <RadioGroup name="use-radio-group" defaultValue="first">
                <Stack direction="row">
                  <MyFormControlLabel className = {classes.btnOption} value="first" label="Saving" control={<Radio />} />
                  <MyFormControlLabel className = {classes.btnOption} fullWidth value="second" label="Checkings" control={<Radio />} />
                </Stack>
              </RadioGroup>
              <TextField fullWidth type="text" placeholder='Enter the reason for the transfer' sx={{ fontSize: '17px', marginTop : '10px'}} />
              <Button className={classes.button} onClick={onDelivery}>Save and continue</Button>
            </Stack>
        </Container>
      </ContainerStyle>
    </RootStyle >
  );
}
