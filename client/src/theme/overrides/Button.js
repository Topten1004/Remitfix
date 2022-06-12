// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none'
          }
        },
        sizeLarge: {
          height: 48
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: 'none',
          '&:hover': {
             backgroundColor: theme.palette.grey[400]
           }
        },
        containedPrimary: {
          boxShadow: 'none'
        },
        containedSecondary: {
          boxShadow: 'none'
        },
        outlinedInherit: {
           border: `1px solid ${theme.palette.grey[500_32]}`,
           '&:hover': {
             backgroundColor: theme.palette.action.hover
          }
        },
        textInherit: {
           '&:hover': {
             backgroundColor: theme.palette.action.hover
           }
        }
      }
    }
  };
}
