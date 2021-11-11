import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';

export const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        md: 1440,
      },
    },
  });

  export const useStyles = makeStyles((theme) => ({
    avatar: {
        width: '70px',
        height: '70px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
          },
    },
    button: {
        backgroundColor: '#BF616A',
        color: '#E5E9F0',
        width: '90px',
        height: '25px',
        fontSize: '0.6em',
        paddingTop: '10px',
        fontWeight: '700',
        fontFamily: 'Mullish, sans-serif',
    },
}));

