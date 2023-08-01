import { lazy } from 'react';

export enum ROUTES {
  MAIN = '/',
  TEAM = 'team',
  NOT_FOUND = '*',
}

export const MainPage = lazy(
  () => import('../pages/Main' /* webpackChunkName: "MainPage" */),
);

export const TeamPage = lazy(
  () => import('../pages/Team' /* webpackChunkName: "TeamPagePage" */),
);

export const NotFoundPage = lazy(
  () => import('../pages/NotFound' /* webpackChunkName: "NotFoundPage" */),
);
