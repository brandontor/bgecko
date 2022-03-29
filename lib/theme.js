import { FormatUnderlined } from '@mui/icons-material';
import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/material';
import { orange, pink, purple } from '@mui/material/colors';

export const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        md: 1440,
      },
    },
    palette: {
      primary:{
        main: '#D8DEE9',
        warning: '#BF616A'
      },
      secondary: {
        main: '#BF616A'
      }
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#fff'
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: '#fff',
            "&:hover": {
              borderColor: '#5dc2a6',
            },
          }
        }
      }
    }
  });
