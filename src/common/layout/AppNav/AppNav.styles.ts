import { IconButton, Toolbar, styled } from '@mui/material';

export const NavBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0 !important;
`;

export const BurgerBtn = styled(IconButton)`
  min-width: 0;
  border: 2px solid ${({ theme }) => theme.palette.text.primary};
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`;
