import { v4 as uuidv4 } from 'uuid';
import { NavLink } from '@typings/types';
import { ROUTES } from '@routes/routes';

export const NAV_LINKS: NavLink[] = [
  {
    id: uuidv4(),
    path: ROUTES.MAIN,
    label: 'layout.nav.main',
    available: true,
    icon: null,
    subLinks: [],
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTES.TEAM,
    label: 'layout.nav.team',
    available: true,
    icon: null,
    subLinks: [],
    isDisabled: false,
  },
];
