import { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Main } from '@common/layout/AppMain/AppMain.styles';

type AppMainProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AppMain: FC<AppMainProps> = ({ children }) => (
  <Main component="main">{children}</Main>
);

export default AppMain;
