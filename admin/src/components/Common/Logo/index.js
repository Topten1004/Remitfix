import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
// ----------------------------------------------------------------------

import { Link } from 'react-router-dom';
import logoImg from '../../../assets/dark_logo.png';

DLogo.propTypes = {
  sx: PropTypes.object
};

export default function DLogo({ sx }) {
  return (
    <Link align="center" to="/dashboard">
      <Box component="img" src={logoImg} sx={{ width: 157, height: 41, ...sx }} />
    </Link>
  );
}
