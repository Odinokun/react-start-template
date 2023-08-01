import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: [
    'Fira Code, monospace',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  htmlFontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  h2: {
    fontWeight: 700,
    color: '#e6bb5c',
  },
  h3: {
    fontWeight: 700,
    color: '#e6bb5c',
  },
};
