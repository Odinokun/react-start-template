import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '@routes/routes';

export const usePreloader = () => {
  const { pathname } = useLocation();

  const showPreloader = useMemo(() => {
    const animationCompleted =
      window && window?.sessionStorage?.getItem('animationCompleted');

    let isAnimationCompleted = false;

    if (animationCompleted) {
      isAnimationCompleted = JSON.parse(animationCompleted);
    }

    return pathname === ROUTES.MAIN && !isAnimationCompleted;
  }, [pathname]);

  return {
    showPreloader,
  };
};
