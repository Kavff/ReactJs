import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#111b24',
    },
    secondary: {
      main: teal[200],
    },
    accent :{
      main: "#7ff4e3"
    }
  },
});

export default theme;