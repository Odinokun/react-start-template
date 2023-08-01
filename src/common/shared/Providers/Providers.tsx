import { FC, ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { Toastify } from '@common/shared';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryView } from '@common/shared';

import { queryClient } from '@services/api/query-client.ts';
import { theme } from '@theme/theme.ts';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => (
  <ErrorBoundary FallbackComponent={ErrorBoundaryView}>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Toastify />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default Providers;
