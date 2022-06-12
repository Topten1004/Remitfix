
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Drawer} from '@mui/material';
// components
import LLogo from '../../components/LLogo';
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend';
import { useNavigate } from 'react-router-dom';
//
import sidebarConfig from './SidebarConfig';
import { GREEN } from 'src/static/constant';
import { BRAND_DARK_BLUE } from 'src/static/constant';

import { makeStyles } from '@mui/styles';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 270;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
    backgroundColor: '#183765'
  }
}));

// ----------------------------------------------------------------------
const useStyles = makeStyles(() => ({
  boxContainer : {
    paddingBottom: 5, 
    marginTop: 5,
    width:'100%',
    align:'center'
  },

  btnSend: {
      backgroundColor: '#00CC00',
      color: '#ffffff',
      height: '42px',
      fontWeight : '100 ! important',
      alignItems : 'center',
      fontSize : '17px',
      width : '202px',
      marginLeft : '30px',
      marginTop : '35px',
      marginRight : '30px',
      marginBottom : '50px',
      '&:hover': {
        backgroundColor: '#00CC00',
    },
  },
  linkEdit: {
    marginRight : '12px',
    marginTop : '5px'
  }
}));

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const classes = useStyles();

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  const onSendMoney = () => {
    navigate('/amount', { replace: true });
  };

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
      }}
    >

      <Box sx={{ px: 2.5, mt: '30px' }}>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
          <LLogo />
        </Box>
      </Box>
      <Box className={classes.boxContainer}>
          <Button className={classes.btnSend} onClick={onSendMoney}>
            Send money
          </Button>
      </Box>

      <NavSection navConfig={sidebarConfig} />
      <Box sx={{ flexGrow: 1 }} />

    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: '#183765'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
