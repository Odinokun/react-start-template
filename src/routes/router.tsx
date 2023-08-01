import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AppLayout } from '@common/layout';
import { MainPage, TeamPage, NotFoundPage, ROUTES } from '@routes/routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.MAIN} element={<AppLayout />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTES.TEAM} element={<TeamPage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />,
    </>,
  ),
);
