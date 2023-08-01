import { FC, useState } from 'react';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';

import { NavMenu } from '@common/layout';
import { BurgerBtn, NavBar } from './AppNav.styles';

const AppNav: FC = () => {
  const desktop = useMediaQuery('(min-width:960px)');

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(prev => !prev);

  return (
    <NavBar>
      {desktop ? (
        <NavMenu />
      ) : (
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 280 }}>
            <NavMenu toggleDrawer={toggleDrawer} />
          </Box>
        </Drawer>
      )}

      {!desktop && (
        <BurgerBtn onClick={toggleDrawer}>
          {isOpen ? <Close /> : <Menu />}
        </BurgerBtn>
      )}
    </NavBar>
  );
};

export default AppNav;
