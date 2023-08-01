import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '@theme/theme';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
  Box,
  Button,
  List,
  ListItem,
  Menu,
  MenuItem,
  styled,
} from '@mui/material';

interface Styles {
  menuLink: CSSProperties;
  menuLinkText: CSSProperties;
  activeLink: CSSProperties;
  iconLink: CSSProperties;
}

export const styles: Styles = {
  menuLink: {
    color: theme.palette.text.primary,
    border: '1px solid transparent',
    borderRadius: '8px',
    textDecoration: 'none',
    justifyContent: 'flex-start',
    padding: '5px 10px',
    height: '48px',
    minWidth: '48px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontSize: 'inherit',
    width: '100%',
  },
  menuLinkText: {
    fontSize: 'inherit',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  activeLink: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
    pointerEvents: 'none',
  },
  iconLink: {
    borderColor: theme.palette.text.primary,
  },
};

export const NavListWrap = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    background-color: transparent;
    position: relative;
    width: auto;
    height: auto;
    padding: 0;
    flex-direction: row;
  }
`;

export const NavList = styled(List)`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  position: relative;
  height: auto;
  width: auto;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

export const NavListItem = styled(ListItem)`
  font-size: 22px;
  margin-bottom: 16px;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    max-width: 140px;
    margin-left: 8px;
    margin-bottom: 0;
    font-size: 16px;
  }
`;

export const NavListButton = styled(Button)`
  position: relative;
  padding-right: 20px !important;
  justify-content: flex-start;

  &:hover {
    background-color: transparent;
  }

  &:before {
    content: '';
    position: absolute;
    top: 16px;
    display: block;
    z-index: 1;
    right: 4px;
    width: 7px;
    height: 7px;
    border-left: 1px solid ${theme.palette.primary.main};
    border-bottom: 1px solid ${theme.palette.primary.main};
    transform: rotate(-45deg);
  }
`;

export const NavSubList = styled(Menu)`
  ul {
    position: relative;
    background-color: ${theme.palette.primary.main};
  }
  .MuiPaper-root {
    width: 250px;

    @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      width: auto;
    }
  }
`;

export const NavSubListItem = styled(MenuItem)`
  background-color: ${theme.palette.primary.main};
  transition: all 0.2s ease-in-out;
  color: ${theme.palette.text.secondary};

  hover: {
    background-color: ${theme.palette.primary.light};
  }
`;

export const NavListLink = styled(Button)``;

export const NavSubListLink = styled(Link)`
  color: ${theme.palette.text.secondary};
  text-decoration: none;
  font-size: 22px;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 16px;
  }
`;

export const WalletButton = styled(WalletMultiButton)`
  .wallet-adapter-button-start-icon {
    display: none;
  }
`;
