import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// material
import { FormControlLabel, Typography, Stack, TextField, IconButton, InputAdornment, Button, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Checkbox } from '@mui/material';

import CountrySelect from './CountrySelect';
// ----------------------------------------------------------------------

import PropType from 'prop-types';

import { connect } from 'react-redux';

import { SignUp } from '../../../redux/action/auth';

import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  smallTitle1: {
    fontSize: '13px',
    marginTop: '5px'
  },
  smallTitle2: {
    marginTop: '20px',
    fontSize: '15px',
    color: '#818181'
  },
  btnSign : {
    width: '80%',
    alignSelf: 'center', 
    color: 'error', 
    backgroundColor: '#183765', 
    height: '42px'
  }
})
const RegisterForm = (props) => {

  const classes = useStyle();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [invite, setInvite] = useState(false);
  const [role, setRole] = useState(1);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
 
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, "Must be at least 6 characters long")
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      country: '',
      invite: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleInvite = (invite) => {
    setInvite(invite);
  }

  const handleChange = () => {

  }

  const onSignUp = () => {

  }


  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack>
          <Typography variant="p" sx={{ mt: 2 }}>Enter your email</Typography>
          <TextField fullWidth autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <Typography className={classes.smallTitle2}>Create your password</Typography>

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <Typography variant="p" className={classes.smallTitle1}>Must be at least 6 characters long</Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <FormControlLabel
              control={<Checkbox {...getFieldProps('invite')} onChange={e => { handleInvite(e.target.checked) }} />}
              label="I have an invite code"
            />
          </Stack>
          <Stack sx={{ display: 'none' }}>
            <TextField fullWidth type="text" hidden={false} placeholder='Enter your invite code' />
          </Stack>
          <CountrySelect />
          <Stack align='center' sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" onClick = { onSignUp } loading={isSubmitting} >Sign Up</Button>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

RegisterForm.propsType = {
  message: PropType.array.isRequired
}

const mapStateToProps = (state) => ({
  message: state.auth.message
})

const mapDispatchToProps = {
  SignUp
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);