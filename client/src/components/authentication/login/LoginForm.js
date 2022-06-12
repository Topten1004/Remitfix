import * as Yup from 'yup';
import { useEffect, useState } from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  FormControlLabel
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

import PropType from 'prop-types';

import { connect } from 'react-redux';

import { SignIn } from '../../../redux/action/auth';
import { flatMap } from 'lodash';

const LoginForm = (props) => {

  const { message, SignIn } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (message === "Success") {
      console.log(message);

      navigate('/dashboard', { replace: true });
    }
  }, [message, navigate])

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
      SignIn("Polarbear@email.com", "Polarbear@email.com");
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack>
          <Typography variant="p" sx={{ mt: 2 }}>
            Enter your email
          </Typography>
          <TextField
            fullWidth
            sx = {{ marginTop:'8px'}}
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <Typography variant="p" sx={{ mt: 2 }}>
            Enter your password
          </Typography>
          <TextField
            fullWidth
            sx = {{marginTop : '8px'}}
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <Link underline="none" component={RouterLink} variant="subtitle2" to="/reset">
            <Typography sx = {{color:'#000000', marginTop:'10px'}}>Forgot password?</Typography>
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel control={<Checkbox {...getFieldProps('remember')} checked = { false } />} label="Remember me on this device"/>
        </Stack>
        <Stack>
          <LoadingButton
            sx={{ width: '80%', alignSelf: 'center', backgroundColor : '#183765' }}
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

LoginForm.propsType = {
  message: PropType.array.isRequired
}

const mapStateToProps = (state) => ({
  message: state.auth.message
})

const mapDispatchToProps = {
  SignIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);