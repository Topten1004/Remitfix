import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Stack, Box, Card, Link, Container, Typography, TextField, FormControl, InputLabel, NativeSelect, Button, Checkbox, Radio, Divider, Grid, Select, MenuItem} from '@mui/material';
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

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  title: {
    marginTop: '110px',
    fontSize: "30px",
    fontWeight: '700'
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
    marginBottom: '15px',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#818181'
    },
  }
})

// ----------------------------------------------------------------------

export default function AddCustomer() {

  const classes = useStyles();
  const navigate = useNavigate();

  const onSaveCustomer = () => {
    navigate('/dashboard', { replace: true });
  }

  return (
    <RootStyle title="Add New Customer |RemitFix">
      <ContainerStyle>
        <Container maxWidth="sm">
          <Stack direction="column">
            <Typography className={classes.title} align="center" >Add customer details</Typography>
            <Typography variant="p" sx={{ marginTop: '30px' }}>Full name</Typography>
            <TextField fullWidth autoComplete="username" type="text" sx={{ marginTop: '8px' }} />
            <Typography variant="p" className={classes.contents} >Email</Typography>
            <TextField fullWidth autoComplete="username" type="email" defaultValue='Optional' sx={{ marginTop: '8px' }} />
            <Typography variant="p" className={classes.contents} sx={{ marginTop: '8px' }}>Street Address</Typography>
            <TextField fullWidth autoComplete="username" type="text" />
            <Typography variant="p" className={classes.contents} sx={{ marginTop: '8px' }}>City/Town</Typography>
            <TextField fullWidth autoComplete="username" type="text" />
            <Typography variant="p" sx={{ marginTop: '20px' }}>Country of residence</Typography>
            <CountrySelect />
            <Typography variant="p" className={classes.contents} >Phone number</Typography>
            <TextField fullWidth autoComplete="username" type="text" />
            <RadioGroup name="use-radio-group" defaultValue="first">
              <Typography variant="p" className={classes.contents} >Gender</Typography>
              <Stack direction="row">
                <MyFormControlLabel sx={{ width: '50%', border: '1px solid #D5D5D5', marginLeft: '0px' }} value="first" label="Female" control={<Radio />} />
                <MyFormControlLabel sx={{ width: '50%', border: '1px solid #D5D5D5', marginRight: '0px ! important' }} value="second" label="male" control={<Radio />} />
              </Stack>
            </RadioGroup>
            <Typography sx={{ fontSize: '20px' }}>Date of birth</Typography>
            <Divider />
            <Grid container spacing={1} sx={{ marginTop: '10px' }}>
              <Grid item lg={4} xs={4} >
                <Typography>Month</Typography>
              </Grid>
              <Grid item lg={4} xs={4}>
                <Typography>Day</Typography>
              </Grid>
              <Grid item lg={4} xs={4}>
                <Typography>Year</Typography>
              </Grid>
              <Grid item lg={4} xs={4}>
                <TextField></TextField>
              </Grid>
              <Grid item lg={4} xs={4}>
                <TextField></TextField>
              </Grid>
              <Grid item lg={4} xs={4}>
                <TextField></TextField>
              </Grid>
            </Grid>
            <Typography sx={{ fontSize: '20px', fontWeight: '700', marginTop: '31px' }}>Bank details (optional)</Typography>
            <Divider />
            <Typography variant="p" className={classes.contents}>Bank Name</Typography>
            <Select fullWidth id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Typography variant="p" className={classes.contents} >Account number</Typography>
            <TextField fullWidth type="number" />
            <Typography variant="p" className={classes.contents} >SWIFT code</Typography>
            <TextField fullWidth type="number" />
            <RadioGroup name="use-radio-group" defaultValue="first">
              <Typography className = {classes.contents}>Account type</Typography>
              <Stack direction="row">
                <MyFormControlLabel sx={{ width: '50%', border : '2px solid #D5D5D5', marginLeft : '0px !important'}} value="first" label="Saving" control={<Radio />} />
                <MyFormControlLabel sx={{ width: '50%', border : '2px solid #D5D5D5', marginRight : '0px !important' }} value="second" label="Checkings" control={<Radio />} />
              </Stack>
            </RadioGroup>
            <Typography sx = {{fontSize:'20px',fontWeight:'700', marginTop : '31px'}}>Service type (optional)</Typography>
            <Divider />
            <Typography sx = {{marginTop : '20px'}}>Devlivery option</Typography>
            <Select fullWidth id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Typography className = {classes.contents} sx = {{marginTop:'20px'}}>Partner</Typography>
            <TextField fullWidth type="text" placeholder='RemitFix' sx={{ fontSize: '17px' }} />
            <Button className={classes.button} onClick={onSaveCustomer}>Save customer</Button>
          </Stack>
        </Container>
      </ContainerStyle>
    </RootStyle >
  );
}
