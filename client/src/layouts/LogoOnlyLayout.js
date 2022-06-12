import { Link as RouterLink, Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
// components
import DLogo from '../components/DLogo';

// ----------------------------------------------------------------------

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  backgroundColor: '#FFFFFF',
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4, 18, 0)
  }
}));

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
  return (
    <>
      <HeaderStyle>
        <RouterLink to="/">
            <DLogo sx = {{ marginBottom: 3}}/>
        </RouterLink>
      </HeaderStyle>
      <Outlet />
    </>
  );
}
