import { FC } from 'react';
import i18next from 'i18next';

import { Team } from '@modules/Team/Team';
import { withMetadata } from '@common/hoc/withMetadata';

const TeamPage: FC = () => <Team />;

const TeamPageMeta = withMetadata({
  title: i18next.t('meta.team.title'),
  description: i18next.t('meta.team.description'),
})(TeamPage);

export default TeamPageMeta;
