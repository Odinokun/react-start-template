import { useEffect, useCallback, useState } from 'react';

type ThemeMode = 'dark' | 'light';

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  console.log('themeMode', themeMode);

  useEffect(() => {
    const theme = localStorage.getItem('metame_theme') ?? null;
    const storedTheme = theme !== null ? JSON.parse(theme) : null;

    if (storedTheme !== null) setThemeMode(storedTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');

    localStorage.setItem('metame_theme', JSON.stringify(themeMode));
  }, [themeMode]);

  return {
    themeMode,
    toggleTheme,
  };
};
