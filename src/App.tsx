import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Providers } from '@common/shared';
import { router } from '@routes/router';

const App: FC = () => {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
};

export default App;
