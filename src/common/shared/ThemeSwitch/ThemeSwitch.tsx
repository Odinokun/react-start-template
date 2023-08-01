import { FC } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '@common/hooks/useTheme';

const ToggleSwitch: FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch checked={themeMode === 'dark'} onChange={toggleTheme} />
        }
        label={themeMode ? <DarkMode /> : <LightMode />}
      />
    </FormGroup>
  );
};

export default ToggleSwitch;
