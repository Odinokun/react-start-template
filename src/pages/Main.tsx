import { FC } from 'react';
import i18next from 'i18next';

import { Main } from '@modules/Main/Main';
import { withMetadata } from '@common/hoc/withMetadata';

const MainPage: FC = () => <Main />;

export const MainPageMeta = withMetadata({
  title: i18next.t('meta.main.title'),
  description: i18next.t('meta.main.description'),
})(MainPage);

export default MainPageMeta;
