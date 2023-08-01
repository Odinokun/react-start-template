import { FC, DetailedHTMLProps, HTMLAttributes, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, AppMain, AppBasement } from '@common/layout';
import { Layout } from '@common/layout/AppLayout/AppLayout.styles';
import { ErrorBoundaryView } from '@common/shared';

type AppLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AppLayout: FC<AppLayoutProps> = () => (
  <Layout>
    <AppBar />
    <AppMain>
      {/*// FIX: Change ErrorBoundaryView to Preloader or delete it */}
      <Suspense fallback={<ErrorBoundaryView />}>
        <Outlet />
      </Suspense>
    </AppMain>
    <AppBasement />
  </Layout>
);

export default AppLayout;
