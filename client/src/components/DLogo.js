import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';
// ----------------------------------------------------------------------

import { Link } from 'react-router-dom';
import logoImg from '../assets/dark_logo.png';

DLogo.propTypes = {
  sx: PropTypes.object
};

export default function DLogo({ sx }) {
  return (
    <Box sx = {{ width: '160px !important', height : '40px !important', ...sx}}>
        <Link align="center" to="/dashboard">
            <Box component="img" src={logoImg} sx={{ width: 160, height: 40, ...sx }} />
        </Link>
    </Box>
  );
}
