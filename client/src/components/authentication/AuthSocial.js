import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
// material
import { Stack, Button, Divider, Typography } from '@mui/material';

import { GoogleLogin } from 'react-google-login';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import { REACT_APP_GOOGLE_CLIENT, REACT_APP_FACEBOOK_CLIENT } from 'src/static/constant';

import { sendFacebookToken, sendGoogleToken } from 'src/redux/action/auth';

import PropType from 'prop-types';

import { connect } from 'react-redux';
//  

const AuthSocial = (props) => {
  const { message, sendFacebookToken, sendGoogleToken } = props;

  const responseGoogle = response => {
    console.log("response" + response.code);
  };

  const responseFacebook = response => {
    console.log(response);
    sendFacebookToken(response.userID, response.accessToken)
  };

  return (
    <>
      <Stack sx = {{mt:1}}/>
      <Divider />
      <Typography align= 'center' varient = "p" sx = {{ pt : 4 }}>Or continue using</Typography>
      <Stack direction="row" spacing={2} sx = {{ mt:2, mb:1  }}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Icon icon={facebookFill} color="#1877F2" height={24} />
        </Button>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Icon icon={googleFill} color="#1877F2" height={24} />
        </Button>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <span className='iconify' data-icon="grommet-icons:apple"></span>
        </Button>
      </Stack>
    </>
  );
}

AuthSocial.propsType = {
  message: PropType.array.isRequired
}

const mapStateToProps = (state) => ({
  message: state.auth.message
})

const mapDispatchToProps = {
  sendGoogleToken,
  sendFacebookToken,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthSocial);