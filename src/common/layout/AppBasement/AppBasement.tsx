import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import {
  AppFooter,
  AppContainer,
} from '@common/layout/AppBasement/AppBasement.styles';

type AppBasementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AppBasement: FC<AppBasementProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AppFooter component="footer">
      <AppContainer maxWidth="xl">{currentYear}</AppContainer>
    </AppFooter>
  );
};

export default AppBasement;
