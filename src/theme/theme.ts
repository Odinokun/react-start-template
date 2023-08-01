import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';

let theme = createTheme({
  palette,
  typography,
  breakpoints,
});

theme = responsiveFontSizes(theme);

export { theme };
