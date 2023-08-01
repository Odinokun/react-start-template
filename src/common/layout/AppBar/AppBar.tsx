import { FC, DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Container } from '@mui/material';

import { AppNav } from '@common/layout';
import { ROUTES } from '@routes/routes';
import { AppHeader, style } from './AppBar.styles';

type AppBarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AppBar: FC<AppBarProps> = () => {
  const [pageScroll, setPageScroll] = useState<number>(0);

  const { pathname } = useLocation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    pathname !== ROUTES.MAIN && setPageScroll(latest);
  });

  const headerBlurred = pageScroll > 30 ? style.activeHeader : {};

  return (
    <AppHeader sx={headerBlurred}>
      <Container maxWidth="xl">
        <AppNav />
      </Container>
    </AppHeader>
  );
};

export default AppBar;
