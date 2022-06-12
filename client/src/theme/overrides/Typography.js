// ----------------------------------------------------------------------
import Roboto from '../../assets/RobotoCondensed-Regular.ttf';

export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        fontFamily: {Roboto},
        gutterBottom: {
          marginBottom: theme.spacing(1)
        }
      }
    }
  };
}
