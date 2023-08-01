import { styled, AppBar } from '@mui/material';

export const AppHeader = styled(AppBar)`
  position: fixed;
  background-color: transparent;
  box-shadow: none;
  top: 0;
  z-index: 50;
  width: 100%;
  transition: all 0.3s ease-in-out;
  padding: 0;
`;

export const style = {
  activeHeader: {
    backdropFilter: 'blur(4px)',
  },
};
