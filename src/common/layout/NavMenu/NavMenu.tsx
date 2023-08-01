import { FC, useState, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { NAV_LINKS } from '@routes/navLinks';

import {
  NavListWrap,
  NavList,
  NavListButton,
  NavListItem,
  NavListLink,
  NavSubList,
  NavSubListItem,
  NavSubListLink,
  styles,
} from './NavMenu.styles';

interface NavMenuProps {
  toggleDrawer?: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ toggleDrawer }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    toggleDrawer?.();
  };

  return (
    <NavListWrap>
      <NavList>
        {/* // FIXME: to fxied menu styles and links */}
        {NAV_LINKS.map(({ path, label, available, subLinks }) => {
          const handleOnClick = () => {
            navigate(path);
            handleClose();
          };
          return (
            available && (
              <NavListItem key={path}>
                {!subLinks.length ? (
                  <NavListLink
                    onClick={handleOnClick}
                    sx={{
                      ...styles.menuLink,
                      ...(pathname === `/${path}` ? styles.activeLink : {}),
                    }}
                  >
                    <Typography sx={styles.menuLinkText}>{t(label)}</Typography>
                  </NavListLink>
                ) : (
                  <>
                    <NavListButton
                      sx={{
                        ...styles.menuLink,
                      }}
                      onClick={handleClick}
                    >
                      <Typography sx={styles.menuLinkText}>
                        {t(label)}
                      </Typography>
                    </NavListButton>

                    <NavSubList
                      open={!!anchorEl}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                    >
                      {subLinks?.map(({ path, label }) => (
                        <NavSubListItem key={path} onClick={handleClose}>
                          <NavSubListLink to={path}>
                            <Typography sx={styles.menuLinkText}>
                              {t(label)}
                            </Typography>
                          </NavSubListLink>
                        </NavSubListItem>
                      ))}
                    </NavSubList>
                  </>
                )}
              </NavListItem>
            )
          );
        })}
      </NavList>
    </NavListWrap>
  );
};

export default NavMenu;
