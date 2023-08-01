import { FC } from 'react';
import i18next from 'i18next';

import { NotFound } from '@modules/NotFound/NotFound';
import { withMetadata } from '@common/hoc/withMetadata';

const NotFoundPage: FC = () => <NotFound />;

const NotFoundMeta = withMetadata({
  title: i18next.t('meta.notFound.title'),
  description: i18next.t('meta.notFound.description'),
})(NotFoundPage);

export default NotFoundMeta;
