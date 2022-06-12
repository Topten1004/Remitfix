import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
// ----------------------------------------------------------------------

import { Link } from 'react-router-dom';
import logoImg from '../assets/light_logo.png';

LLogo.propTypes = {
  sx: PropTypes.object
};

export default function LLogo({ sx }) {
  return (
    <Link align="center" to="/dashboard">
      <Box component="img" src={logoImg} sx={{ ml: '50px', mt: '30px', width: 125, height: 17, ...sx }} />
    </Link>
  );
}
