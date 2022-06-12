import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
// ----------------------------------------------------------------------

import { Link } from 'react-router-dom';
import logoImg from '../assets/white_logo.png' ;

WLogo.propTypes = {
  sx: PropTypes.object
};

export default function WLogo({ sx }) {  
  return (
    <Link align="center" to="/dashboard">
      <Box component="img" src={logoImg} sx = {{ ...sx}} />
    </Link>
  );
}
